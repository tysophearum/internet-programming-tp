var inputArea = document.getElementById("input-area")
var bookNameInput = document.getElementById("name-input")
var bookCategoryInput = document.getElementById("category-input")
var bookPriceInput = document.getElementById("price-input")
var books = document.getElementById("books")
var addBtn = document.getElementById("add-btn")

function add() {
    let d = new Date()
    let id = d.getTime() + ""

    //Create book containter div
    var bookContainer = document.createElement("div")
    bookContainer.className = "book"
    bookContainer.id = id
    
    //Create input buttons
    var bookBtns = document.createElement("div")
    bookBtns.className = "book-btns"
    var deleteBtn = document.createElement("input")
    deleteBtn.type = "button"
    deleteBtn.className = "delete-btn"
    deleteBtn.id = id
    deleteBtn.value = "Delete"
    var chnameBtn = document.createElement("input")
    chnameBtn.type = "button"
    chnameBtn.className = "chname-btn"
    chnameBtn.id = id
    chnameBtn.value = "Change Name"
    //Add buttons into the books buttons div as its child
    bookBtns.appendChild(deleteBtn)
    bookBtns.appendChild(chnameBtn)

    //Create book image
    var bookImg = document.createElement("img")
    bookImg.src = "img/book.png"
    bookImg.className = "book-img"
    
    //Create name output with values
    var bookNameTitle = document.createElement("span")
    bookNameTitle.className = "name-title"
    bookNameTitle.innerText = "Name: "
    var bookNameOutput = document.createElement("span")
    bookNameOutput.className = "name-output"
    bookNameOutput.innerText = bookNameInput.value
    
    
    //Create price output with values
    var bookPriceTitle = document.createElement("span")
    bookPriceTitle.className = "price-title"
    bookPriceTitle.innerText = "Price: "
    var bookPriceOutput = document.createElement("span")
    bookPriceOutput.className = "price-output"
    bookPriceOutput.innerText = bookPriceInput.value
    
    //Create name output with values
    var bookCategoryTitle = document.createElement("span")
    bookCategoryTitle.className = "category-title"
    bookCategoryTitle.innerText = "Category: "
    var bookCategoryOutput = document.createElement("span")
    bookCategoryOutput.className = "category-output"
    bookCategoryOutput.innerText = bookCategoryInput.value

    //Create see  more link
    var see = document.createElement("div")
    see.href = 'idk'
    see.innerText = "See"
    see.style.color = "blue"
    
    //Reset value in the inputs
    bookNameInput.value = ""
    bookPriceInput.value = ""
    bookCategoryInput.value = ""
    
    //Add everything into the book div element
    bookContainer.appendChild(bookBtns)
    bookContainer.appendChild(bookImg)
    bookContainer.appendChild(bookNameTitle)
    bookContainer.appendChild(bookNameOutput)
    bookContainer.appendChild(document.createElement("br"))
    
    bookContainer.appendChild(bookPriceTitle)
    bookContainer.appendChild(bookPriceOutput)
    bookContainer.appendChild(document.createElement("br"))
    
    bookContainer.appendChild(bookCategoryTitle)
    bookContainer.appendChild(bookCategoryOutput)
    bookContainer.appendChild(see)
    
    
    
    //Append the new book into the books container
    books.appendChild(bookContainer)
}


function update (book) {
    // Create Update button
    var updateBtn = document.createElement("input")
    updateBtn.type = "button"
    updateBtn.value = "Update"

    //Remove add button in the input area and replace it with the update button
    addBtn.remove()
    inputArea.appendChild(updateBtn)

    //Get the area that display the book name price and category from the book
    let bookName = null
    let bookPrice = null
    let bookCategory = null
    for (var i = 0; i < book.childNodes.length; i++) {
        if (book.childNodes[i].className == "name-output") {
            bookName = book.childNodes[i];
            console.log(bookName)
        }
        else if (book.childNodes[i].className == "price-output") {
            bookPrice = book.childNodes[i];
            console.log(bookPrice);
        } 
        else if (book.childNodes[i].className == "category-output") {
            bookCategory = book.childNodes[i];
            console.log(bookCategory);
        }
    }

    //put the original data of the book in the input area for the user to update
    bookNameInput.value = bookName.innerText
    bookPriceInput.value = bookPrice.innerText
    bookCategoryInput.value = bookCategory.innerText
    
    updateBtn.addEventListener("click", ()=>{
        //Update the data of the book with new data after user click the Update button
        bookName.innerText = bookNameInput.value
        bookPrice.innerText = bookPriceInput.value
        bookCategory.innerText = bookCategoryInput.value

        //Reset the value in the input area 
        bookNameInput.value = ""
        bookPriceInput.value = ""
        bookCategoryInput.value = ""

        //Remove the update button and replace it back with the add button
        updateBtn.remove()
        inputArea.appendChild(addBtn)
    })
}


addBtn.addEventListener("click", add)
books.addEventListener("click", (e)=>{
    let tar = e.target
    if (tar.className == "delete-btn") {
        let removeBook = document.getElementById(tar.id)
        removeBook.remove()
    }
    else if (tar.className == "chname-btn") {
        let changeBook = document.getElementById(tar.id)
        update(changeBook)
    }
})

