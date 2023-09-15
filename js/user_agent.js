let d = document;

function uuser(property) {
    const $userAgent = d.getElementById(property);

    let browserName = "Desconocido";

    const isMobile = {
        android: () => navigator.userAgent.match(/Android/i),
        ios: () => navigator.userAgent.match(/Iphone|Ipad|Ipod/i),
        windows: () => navigator.userAgent.match(/Windows phone/i),
        any: function () { return this.android() || this.ios() || this.windows() }
    },

        isDesktop = {
            windows: () => navigator.userAgent.match(/Windows NT/i),
            mac: () => navigator.userAgent.match(/mac os/i),
            linux: () => navigator.userAgent.match(/Linux/i),
            any: function () {
                return (this.windows() ||
                    this.mac() ||
                    this.linux()
                )
            }
        },

        isBrowser = {
            chrome: () => navigator.userAgent.match(/chrome/i),
            firefox: () => navigator.userAgent.match(/firefox/i),
            edge: () => navigator.userAgent.match(/edge/i),
            brave: () => navigator.userAgent.match(/brave/i),
            opera: () => navigator.userAgent.match(/opera|opera mini/i),
            safari: () => navigator.userAgent.match(/safari/i),
            any: function () {
                return (
                    this.chrome() ||
                    this.firefox() ||
                    this.edge() ||
                    this.brave() ||
                    this.opera() ||
                    this.safari()
                );
            }
        }

    let properties = `
    <p><strong>Encabezado del Usuario: </strong>${navigator.userAgent}</p>
    <p><strong>OS: </strong>${isMobile.any() ? isMobile.any() : isDesktop.any()}</p>
    <p><strong>Navegador: </strong>${isBrowser.any()}</p>
    `;

    $userAgent.innerHTML = properties;
}

export { uuser }