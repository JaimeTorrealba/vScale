export default {
  install: (app) => {
    app.directive("scale", (el, binding) => {
      const duration = binding.value?.seconds
        ? `${binding.value.seconds}s`
        : "0.3s";

      const scale = binding.value?.scale ? `${binding.value.scale}` : "1.1";

      var style = document.createElement("style");
      style.innerHTML = `.vScale { 
        transition: transform ${duration}; 
    }
    .vScale:hover{
        transform:scale(${scale})
    }
    `;
      document.getElementsByTagName("head")[0].appendChild(style);

      el.className = "vScale";
    });
  },
};
