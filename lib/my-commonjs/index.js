const { dialog, app } = require("electron");

const run = async () => {
  const myModule = await import("my-module");
  dialog.showMessageBoxSync({ message: myModule.msg });
  app.exit();
};

run().then();
