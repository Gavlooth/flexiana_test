
shadow.cljs.devtools.client.env.module_loaded('flexiana-webapp');

try { flexiana.core.app(); } catch (e) { console.error("An error occurred when calling (flexiana.core/app)"); throw(e); }