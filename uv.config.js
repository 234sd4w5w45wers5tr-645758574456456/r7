// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/service/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "uv.handler.js",
  bundle: "uv.bundle.js",
  config: "uv.config.js",
  sw: "uv.sw.js",
};
