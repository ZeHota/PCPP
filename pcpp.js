var products = require('../pcpp/assets/products')
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
    // 'Main Menu Bar': browser => {
    //     pcpp
    //     .click('@builder')
    //     pcpp.navigate()
    //     .click('@guides')
    //     pcpp.navigate()
    //     .click('@builds')
    //     pcpp.navigate()
    //     .click('@products')
    // },
    // 'Products Section': browser => {
    //     pcpp
    //     products.forEach(item => {
    //         pcpp.prodCycle(pcpp,item)
    //     })
    // },
    // 'Build an expensive PC': browser => {
    //     pcpp
    //     .click('@builder')
    //     partSelec.forEach(item=> {
    //         pcpp.expBuild(pcpp, item)
    //     })
    // },
    // 'Build a Cheap PC': browser => {
    //     pcpp
    //     .click('@builder')
    //     partSelec.forEach(item=> {
    //         pcpp.cheBuild(pcpp, item)
    //     })
    // },
}