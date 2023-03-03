package internal

import (
	"os"

	"github.com/hashicorp/go-hclog"
	hPlugin "github.com/hashicorp/go-plugin"

	"github.com/goto/optimus/config"
	"github.com/goto/optimus/internal/models"
	oPlugin "github.com/goto/optimus/plugin"
)

// InitPlugins triggers initialization of all available plugins
func InitPlugins(logLevel config.LogLevel) (*models.PluginRepository, error) {
	pluginLogLevel := hclog.Info
	if logLevel == config.LogLevelDebug {
		pluginLogLevel = hclog.Debug
	}

	pluginLoggerOpt := &hclog.LoggerOptions{
		Name:   "optimus",
		Output: os.Stdout,
		Level:  pluginLogLevel,
	}
	pluginLogger := hclog.New(pluginLoggerOpt)

	// discover and load plugins.
	pluginRepo, err := oPlugin.Initialize(pluginLogger)
	return pluginRepo, err
}

func CleanupPlugins() {
	hPlugin.CleanupClients()
}
