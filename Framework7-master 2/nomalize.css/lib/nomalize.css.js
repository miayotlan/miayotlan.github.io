'use babel';

import Nomalize.cssView from './nomalize.css-view';
import { CompositeDisposable } from 'atom';

export default {

  nomalize.cssView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.nomalize.cssView = new Nomalize.cssView(state.nomalize.cssViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.nomalize.cssView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'nomalize.css:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.nomalize.cssView.destroy();
  },

  serialize() {
    return {
      nomalize.cssViewState: this.nomalize.cssView.serialize()
    };
  },

  toggle() {
    console.log('Nomalize.css was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
