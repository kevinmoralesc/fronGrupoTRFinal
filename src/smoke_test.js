import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
let er = 0;
async function login(driver) {
    console.log('Iniciando sesión sin credenciales..');
    // Esperar a que el botón "Login" esté presente
    await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Login')]")), 100000);
    // Hacer clic en el botón "Login"
    await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();
    // Continuar con el resto de las acciones de inicio de sesión
    await driver.findElement(By.id('loginEmail')).sendKeys('kevina.moralesc@uqvirtual22.edu.co');
    await driver.findElement(By.id('loginPassword')).sendKeys('1234567898');
    await driver.findElement(By.xpath("//button[contains(text(), 'Ingresar')]")).click();
}

async function handleAlertLogin(driver) {
    try {
        await driver.wait(until.elementLocated(By.id('swal2-html-container')), 10000);
        let alertElement = await driver.findElement(By.id('swal2-html-container'));
        let alertText = await alertElement.getText();
        console.log('Login sin credenciales:');
        console.log('Texto de la alerta:', alertText);

        if (alertText === 'No se encontro el usuario, revisalo o sino estas registrado, registrate') {
            console.log('La alerta contiene el texto esperado.');
        } else {
            er = 1;
            console.error('La alerta no contiene el texto esperado.');

        }
    } catch (e) {
        er = 1;
        console.log('No se encontró ninguna alerta.');

    }
}

async function loginExiste(driver) {
    console.log('Iniciando sesión con credenciales..');
    // Esperar a que el botón "Login" esté presente
    await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Login')]")), 100000);
    // Hacer clic en el botón "Login"
    await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();
    // Continuar con el resto de las acciones de inicio de sesión
    await driver.findElement(By.id('loginEmail')).sendKeys('kevina.moralesc@uqvirtual.edu.co');
    await driver.findElement(By.id('loginPassword')).sendKeys('123456789');
    await driver.findElement(By.xpath("//button[contains(text(), 'Ingresar')]")).click();
}

async function handleAlertLoginExiste(driver) {
    try {
        await driver.wait(until.elementLocated(By.id('swal2-html-container')), 10000);
        let alertElement = await driver.findElement(By.id('swal2-title'));
        let alertText = await alertElement.getText();
        console.log('Login con credenciales credenciales:');
        console.log('Texto de la alerta:', alertText);

        if (alertText === 'El usuario con correo kevina.moralesc@uqvirtual.edu.co ha iniciado sesion correctamente') {
            console.log('La alerta contiene el texto esperado.');
        } else {
            console.error('La alerta no contiene el texto esperado.');

            er = 1;
        }
    } catch (e) {
        er = 1;
        console.log('No se encontró ninguna alerta.');

    }
}

async function handleAlertRegistro(driver) {
    try {
        await driver.wait(until.elementLocated(By.id('swal2-html-container')), 10000);
        let alertElement = await driver.findElement(By.id('swal2-title'));
        let alertText = await alertElement.getText();
        console.log('registro con datos Correctos:');
        console.log('Texto de la alerta:', alertText);

        if (alertText === 'El usuario con correo miguelav@uqvirtual.edu.co ha sido registrado correctamente') {
            console.log('La alerta contiene el texto esperado.');
        } else {
            er = 1;
            console.error('La alerta no contiene el texto esperado.');
        }
    } catch (e) {
        er = 1;
        console.log('No se encontró ninguna alerta.');
    }
}
async function Registro(driver) {
    console.log('Resgistro valido ...');
    // Esperar a que el botón "Sign up" esté presente
    await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Sign up')]")), 10000);
    // Hacer clic en el botón "Sign up"
    await driver.findElement(By.xpath("//button[contains(text(), 'Sign up')]")).click();
    // Continuar con el resto de las acciones de registro
    await driver.findElement(By.id('nombre')).sendKeys('Miguel ');
    await driver.findElement(By.id('apellido')).sendKeys('Vargas');
    await driver.findElement(By.id('id')).sendKeys('1005087569889');
    await driver.findElement(By.id('telefono')).sendKeys('3015402418');
    await driver.findElement(By.id('email')).sendKeys('miguelav@uqvirtual.edu.co');
    await driver.findElement(By.id('password')).sendKeys('123456789');
    await driver.findElement(By.id('cpassword')).sendKeys('123456789');
    await driver.findElement(By.xpath("//button[contains(text(), 'Registrarse')]")).click();
}



async function RegistroExistente(driver) {
    console.log('Resgistro Existente ...');
    // Esperar a que el botón "Sign up" esté presente
    await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Sign up')]")), 10000);
    // Hacer clic en el botón "Sign up"
    await driver.findElement(By.xpath("//button[contains(text(), 'Sign up')]")).click();
    // Continuar con el resto de las acciones de registro
    await driver.findElement(By.id('nombre')).sendKeys('kevin Andres ');
    await driver.findElement(By.id('apellido')).sendKeys('Morales Castaño');
    await driver.findElement(By.id('id')).sendKeys('1005087691');
    await driver.findElement(By.id('telefono')).sendKeys('3015402410');
    await driver.findElement(By.id('email')).sendKeys('kevina.moralesc@uqvirtual.edu.co');
    await driver.findElement(By.id('password')).sendKeys('123456789');
    await driver.findElement(By.id('cpassword')).sendKeys('123456789');
    await driver.findElement(By.xpath("//button[contains(text(), 'Registrarse')]")).click();
}

async function handleAlertRegistroExistente(driver) {
    try {
        await driver.wait(until.elementLocated(By.id('swal2-html-container')), 10000);
        let alertElement = await driver.findElement(By.id('swal2-html-container'));
        let alertText = await alertElement.getText();
        console.log('registro con datos Correctos:');
        console.log('Texto de la alerta:', alertText);

        if (alertText === 'El email ya esta registrado, verifica que este correcto o intenta con otro') {
            console.log('La alerta contiene el texto esperado.');
        } else {
            er = 1;
            console.error('La alerta no contiene el texto esperado.');
        }
    } catch (e) {
        er = 1;
        console.log('No se encontró ninguna alerta.');
    }
}




async function runSmokeTest() {
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://frongrupotrfinal-production.up.railway.app');
        await driver.wait(until.elementLocated(By.css('body')), 10000);
        await login(driver);
        await handleAlertLogin(driver);
        await driver.get('https://frongrupotrfinal-production.up.railway.app');
        await driver.wait(until.elementLocated(By.css('body')), 10000);
        await RegistroExistente(driver);
        await handleAlertRegistroExistente(driver);
        await driver.get('https://frongrupotrfinal-production.up.railway.app');
        await driver.wait(until.elementLocated(By.css('body')), 10000);
        await Registro(driver);
        await handleAlertRegistro(driver);
        await driver.get('https://frongrupotrfinal-production.up.railway.app');
        await driver.wait(until.elementLocated(By.css('body')), 10000);
        await loginExiste(driver);
        await handleAlertLoginExiste(driver);
    } catch (error) {
        console.error('ocurrió un error durante la ejecución de la prueba:', error);
    } finally {
        await driver.quit();
        process.exit(er); // Marcar como fallida la acción
    }
}

runSmokeTest();
