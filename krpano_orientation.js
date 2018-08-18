function krpanoplugin() {

  class KRpanoOrientation {
    constructor(krpano, pluginPath, pluginObj) {
      this.krpano = krpano;
      this.pluginPath = pluginPath;
      this.pluginObj = pluginObj;

      this.registerEventsCallback();
    }

    registerEventsCallback() {
      var self = this;
      this.krpano.set('events.onremovepano', function(){
        self.cacheOrientation();
      });

      this.krpano.set('events.onnewpano', function(){
        self.correctOrientation();
      })
    }

    cacheOrientation() {
      this.orientation_h = this.getKRpanoFloat('view.hlookat') - this.getKRpanoFloat('view.refhlookat');
      this.orientation_v = this.getKRpanoFloat('view.vlookat') - this.getKRpanoFloat('view.refvlookat');
    }

    correctOrientation() {
      var vlookat = this.orientation_v + this.getKRpanoFloat('view.refvlookat');
      var hlookat = this.orientation_h + this.getKRpanoFloat('view.refhlookat');
      console.log("7amda gah", vlookat, hlookat);
      this.krpano.call('skin_lookat('+hlookat+','+vlookat+')');
    }

    getKRpanoFloat(property) {
      return parseFloat(this.krpano.get(property)) || 0;
    }

    destroy() {
     // Goodbye Cruel world !!
      this.krpano.trace("Zalaaamoooni");
    }
  }


  var plugin = null;
  this.registerplugin = function(krpanointerface, pluginpath, pluginobject){
    plugin = new KRpanoOrientation(krpanointerface, pluginpath, pluginobject);
  }

  this.unloadplugin = function() {
    plugin.destroy;
    plugin = null
  }
}
