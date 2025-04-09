console.log(_.sum([1, 2, 3, 4, 5]));
console.log(_.shuffle([1, 2, 3, 4, 5]));

const instance = basicLightbox.create(`
    <div class="modal">
        <h1>Привет, мир!</h1>
        <p>Это модальное окно с текстом.</p>
    </div>
`);

const btnModal = document.querySelector(".open-btn-modal");
btnModal.addEventListener("click", () => {instance.show() })

const btnClose = document.querySelector(".close-btn-modal");
btnClose.addEventListener("click", () => {instance.close()})

const visible = instance.visible();
console.log(visible);


  
// const book = {
//     title: "The Last Kingdom",
//     pages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     isPublic: true,
//   };


function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
    console.log(title);
    console.log(pages);
  }
  
  // ❌ Що таке 736? Що таке 10283? Що таке true?
  doStuffWithBook({
    title: "The Last Kingdom",
    pages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
  });
  