var partSelec = require('../pcpp/assets/buildSelec')
module.exports = {
    beforeEach: browser => {
        pcpp = browser.page.pcppObj()
        pcpp.navigate()
        browser.resizeWindow(1920, 1080)
    },
    after: browser => {
        pcpp.end()
    },
    // 
    'Build an expensive PC': browser => {
        pcpp
        .click('@builder')
        partSelec.forEach(item=> {
            pcpp.expBuild(pcpp, item)
        })
    },
    'Build a Cheap PC': browser => {
        pcpp
        .click('@builder')
        partSelec.forEach(item=> {
            pcpp.cheBuild(pcpp, item)
        })
    }
}