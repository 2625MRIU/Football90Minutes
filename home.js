const fl = document.querySelector("#article1")
        fl.addEventListener('click',()=>{
            console.log("Click")
            const y = document.querySelector("#clicked")
            y.setAttribute("href","./Article/article.html#20251001")
            y.click()
        })

const f2 = document.querySelector("#article2")
        f2.addEventListener('click',()=>{
            console.log("Click")
            const y = document.querySelector("#clicked")
            y.setAttribute("href","./Article/article.html#20250930")
            y.click()
        })

const f3 = document.querySelector("#article3")
        f3.addEventListener('click',()=>{
            console.log("Click")
            const y = document.querySelector("#clicked")
            y.setAttribute("href","./Article/article.html#20250929")
            y.click()
        })