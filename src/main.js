const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウ
let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({width: 800, height: 600});

	mainWindow.loadFile('index.html');

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});