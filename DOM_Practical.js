// DOM & Practical Challenges
//1- Create infinite scroll

function infiniteScroll(container, loadMore) {
  let loading = false;
  container.addEventlister("scroll", () => {
    //check if near bottom (within 100px)

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      loading = true;
      loadMore().then(() => {
        loading = false;
      });
    }
  });
}

// usage:
// infiniteScroll(document.querySelector(".container"), async () => {
//   const items = await fetchItems();
//   apendToDom(items);
// });

//###################################################################

// 2- DRAG AND DROP
function makeDraggable(element) {
  let offsetX, offsetY;

  element.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;

    const onMouseMove = (e) => {
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
}

makeDraggable(document.querySelector(".draggable"));

//###################################################################

// 3- MODAL/POPUP
