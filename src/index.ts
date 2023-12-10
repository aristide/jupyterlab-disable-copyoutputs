import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-disable-copyoutputs extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-disable-copyoutputs:plugin',
  description: 'remove copy outputs context menu button',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-disable-copyoutputs is activated!');
  }
};

export default plugin;
