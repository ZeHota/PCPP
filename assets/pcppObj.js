var pcppCommands = {
    sortPriceHigh: function (browser, option) {
        this.pause(500)
        this.click('@priceSort')
        this.pause(500)
        this.click('@priceSort')
        return this
    },
    sortPriceLow: function (browser, option) {
        this.pause(500)
        this.click('@priceSort')
        this.pause(500)
        return this
    },
    expBuild: function (browser, option) {
        this.click(option)
        this.sortPriceHigh()
        this.click('@addTopItem')
    },
    cheBuild: function (browser, option) {
        this.click(option)
        this.sortPriceLow()
        this.click('@addTopItem')
    }
}
module.exports = {
    url: 'https://pcpartpicker.com/',
    commands: [pcppCommands],
    elements: {
        //Home Page
        builder: {
            selector: '//*/a[contains(text(), "System Builder")]',
            locateStrategy: 'xpath'
        },
        guides: {
            selector: '//*/section/div/ul/li/a[@href="/guide/"]',
            locateStrategy: 'xpath'
        },
        builds: {
            selector: '//*/section/div/ul/li/a[@href="/builds/"]',
            locateStrategy: 'xpath'
        },
        products: {
            selector: '//*/section/div/ul/li/a[contains(text(), "Browse Products")]',
            locateStrategy: 'xpath'
        },
        //Builder
        CPU: {
            selector: '(//*/a[@href="/products/cpu/"])[2]',
            locateStrategy: 'xpath'
        },
        cooler: {
            selector: '(//*/a[@href="/products/cpu-cooler/"])[2]',
            locateStrategy: 'xpath'
        },
        motherboard: {
            selector: '(//a[@href="/products/motherboard/"])[2]',
            locateStrategy: 'xpath'
        },
        memory: {
            selector: '(//a[@href="/products/memory/"])[2]',
            locateStrategy: 'xpath'
        },
        storage: {
            selector: '(//a[@href="/products/internal-hard-drive/"])[2]',
            locateStrategy: 'xpath'
        },
        videoCard: {
            selector: '(//a[@href="/products/video-card/"])[2]',
            locateStrategy: 'xpath'
        },
        case: {
            selector: '(//a[@href="/products/case/"])[2]',
            locateStrategy: 'xpath'
        },
        PSU: {
            selector: '(//a[@href="/products/power-supply/"])[2]',
            locateStrategy: 'xpath'
        },

        //  Add components
        priceSort: {
            selector: '//div/section/div/div/div/div/table/thead/tr/th[last()]',
            locateStrategy: 'xpath'
        },
        addTopItem: {
            selector: '(//button[@data-product-location=""])',
            locateStrategy: 'xpath'
        },
        price: {
            selector: '(//td[@class="td__price"])[0]',
            locateStrategy: 'xpath'
        }
    }
}