export function configure(aurelia) {
	alert("test");
    aurelia.use
        .basicConfiguration()
        .developmentLogging();

    aurelia.start().then(a => {
        a.setRoot('app/app', document.body);
    });
}

