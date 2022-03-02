package config

import (
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"path/filepath"

	"github.com/odpf/salt/config"
	"github.com/pkg/errors"
	"gopkg.in/yaml.v2"
)

var (
	ErrFailedToRead = "unable to read optimus config file %v (%s)"
	FileName        = ".optimus"
	FileExtension   = "yaml"
)

// LoadOptimusConfig Load configuration file from following paths
// ./
// <exec>/
// ~/.optimus/
func LoadOptimusConfig() (*Optimus, error) {
	var optimus Optimus
	currPath, err := os.Getwd()
	if err != nil {
		return nil, errors.Wrapf(err, "error getting current work directory path")
	}
	execPath, err := os.Executable()
	if err != nil {
		return nil, errors.Wrapf(err, "error getting the executable path")
	}
	currentHomeDir, err := os.UserHomeDir()
	if err != nil {
		return nil, errors.Wrapf(err, "error getting the home directory")
	}
	optimusDir := filepath.Join(currentHomeDir, ".optimus")
	l := config.NewLoader(
		config.WithName(FileName),
		config.WithType(FileExtension),
		config.WithPath(currPath),
		config.WithPath(filepath.Dir(execPath)),
		config.WithPath(optimusDir),
		config.WithEnvPrefix("OPTIMUS"),
		config.WithEnvKeyReplacer(".", "_"),
	)
	if err := l.Load(&optimus); err != nil {
		return nil, errors.Wrapf(err, "error loading config")
	}
	return &optimus, nil
}

func LoadNamespaceConfig() (map[string]*Namespace, error) {
	currPath, err := os.Getwd()
	if err != nil {
		return nil, errors.Wrapf(err, "error getting current work directory path")
	}
	infos, err := ioutil.ReadDir(currPath)
	if err != nil {
		return nil, err
	}
	output := make(map[string]*Namespace)
	for _, info := range infos {
		dirPath := info.Name()
		filePath := path.Join(currPath, dirPath, FileName, FileExtension)
		if _, err := os.Stat(filePath); os.IsNotExist(err) {
			continue
		}
		content, err := ioutil.ReadFile(filePath)
		if err != nil {
			return nil, errors.Wrapf(err, "error reading config from: %s", filePath)
		}
		var namespace Namespace
		if err := yaml.Unmarshal(content, &namespace); err != nil {
			return nil, errors.Wrapf(err, "error unmarshalling config: %s", filePath)
		}
		if output[namespace.Name] != nil {
			fmt.Printf("warning! namespace [%s] from [%s] is already used", namespace.Name, filePath)
			continue
		}
		if namespace.Job.Path != "" {
			namespace.Job.Path = path.Join(currPath, dirPath, namespace.Job.Path)
		}
		for i, d := range namespace.Datastore {
			if d.Path != "" {
				namespace.Datastore[i].Path = path.Join(currPath, dirPath, d.Path)
			}
		}
		output[namespace.Name] = &namespace
	}
	return output, nil
}
