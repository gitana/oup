define(function(require, exports, module) {
    var Ratchet = require("ratchet/ratchet");
    var UI = require("ui");
    var $ = require("jquery");
    
    var Env = require("./env.js");
  
    return Ratchet.Actions.register(
      "get-oversized-image-details",
      UI.AbstractIFrameAction.extend({
        defaultConfiguration: function() {
          var config = this.base();
  
          config.title = "Get Oversized Image Details";
          config.iconClass = "glyphicon glyphicon-pencil";
  
          // the location of the "overlay app"
          config.src = Env.baseUrl + "/app/get-oversized-image-details";
  
          // specify iframe width and height
          config.iframeWidth = "100%";
          config.iframeHeight = "580px";
  
          return config;
        },
  
        /* This method is called every time the action runs and can customize the config per invocation */
        beforeExecute: function(config, actionContext) {
          debugger;
          // always call the base method
          this.base(config, actionContext);
  
          // add parameters to query string
          var parameters = {};
          parameters["username"] = actionContext.observable("user").get().name;
  
          this.appendToQueryString(config, parameters);
        }
      })
    );
  });
  