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
    },
    prodCycle: function (browser, option) {
        this.navigate(pcpp)
        this.click('@products')
        this.click(option)
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
        },
        // Products Links
        prCPU: {
            selector: '//a[@href="/products/cpu/"]',
            locateStrategy: 'xpath'
        },
        prCPUCool: {
            selector: '//a[@href="/products/cpu-cooler/"]',
            locateStrategy: 'xpath'
        },
        prMother: {
            selector: '//a[@href="/products/motherboard/"]',
            locateStrategy: 'xpath'
        },
        prMem: {
            selector: '//a[@href="/products/memory/"]',
            locateStrategy: 'xpath'
        },
        prStore: {
            selector: '//a[@href="/products/storage/"]',
            locateStrategy: 'xpath'
        },
        prGPU: {
            selector: '//a[@href="/products/video-card/"]',
            locateStrategy: 'xpath'
        },
        prPower: {
            selector: '//a[@href="/products/power-supply/"]',
            locateStrategy: 'xpath'
        },
        prCase: {
            selector: '//a[@href="/products/case/"]',
            locateStrategy: 'xpath'
        },
        prCaseFan: {
            selector: '//a[@href="/products/case-fan/"]',
            locateStrategy: 'xpath'
        },
        prFanCtrl: {
            selector: '//a[@href="/products/fan-controller/"]',
            locateStrategy: 'xpath'
        },
        prThermal: {
            selector: '//a[@href="/products/thermal-paste/"]',
            locateStrategy: 'xpath'
        },
        prOptic: {
            selector: '//a[@href="/products/optical-drive/"]',
            locateStrategy: 'xpath'
        },
        prSoundCard: {
            selector: '//a[@href="/products/sound-card/"]',
            locateStrategy: 'xpath'
        },
        prWireNtwrk: {
            selector: '//a[@href="/products/wired-network-card/"]',
            locateStrategy: 'xpath'
        },
        prNoWireNtwrk: {
            selector: '//a[@href="/products/wireless-network-card/"]',
            locateStrategy: 'xpath'
        },
        prMonitors: {
            selector: '//a[@href="/products/monitor/"]',
            locateStrategy: 'xpath'
        },
        prExHD: {
            selector: '//a[@href="/products/external-hard-drive/"]',
            locateStrategy: 'xpath'
        },
        prHeadphone: {
            selector: '//a[@href="/products/headphones/"]',
            locateStrategy: 'xpath'
        },
        prKeyboard: {
            selector: '//a[@href="/products/keyboard/"]',
            locateStrategy: 'xpath'
        },
        prMice: {
            selector: '//a[@href="/products/mouse/"]',
            locateStrategy: 'xpath'
        },
        prSpeaker: {
            selector: '//a[@href="/products/speakers/"]',
            locateStrategy: 'xpath'
        },
        prUninPower: {
            selector: '//a[@href="/products/ups/"]',
            locateStrategy: 'xpath'
        },
        prAntivirus: {
            selector: '//a[@href="/products/software/#W=1"]',
            locateStrategy: 'xpath'
        },
        prAVSoft: {
            selector: '//a[@href="/products/software/#W=8"]',
            locateStrategy: 'xpath'
        },
        prBackup: {
            selector: '//a[@href="/products/software/#W=2"]',
            locateStrategy: 'xpath'
        },
        prDesAndIll: {
            selector: '//a[@href="/products/software/#W=3"]',
            locateStrategy: 'xpath'
        },
        prSecurity: {
            selector: '//a[@href="/products/software/#W=5"]',
            locateStrategy: 'xpath'
        },
        prProductivity: {
            selector: '//a[@href="/products/software/#W=7"]',
            locateStrategy: 'xpath'
        },
        prOS: {
            selector: '//a[@href="/products/os/"]',
            locateStrategy: 'xpath'
        },
        prPhoto: {
            selector: '//a[@href="/products/software/#W=6"]',
            locateStrategy: 'xpath'
        },
        prLaptop: {
            selector: '//a[@href="/products/laptop/"]',
            locateStrategy: 'xpath'
        },
    }
}