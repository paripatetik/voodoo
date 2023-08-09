export default function paginate(currentPage, totalPages) {
    const buttonsContainer = [];
    // Always show the first page
    if(currentPage!==1)addButton(buttonsContainer, 1);
  
    // Show "..." if there are pages between the first and current - 2
    if (currentPage - 2 > 2) {
      addEllipsis(buttonsContainer);
    }
  
    // Show two pages before the current page
    if (currentPage - 2 > 1) {
      addButton(buttonsContainer, currentPage - 2);
    }
  
    // Show one page before the current page
    if (currentPage - 1 > 1) {
      addButton(buttonsContainer, currentPage - 1);
    }
  
    // Show the current page
    addButton(buttonsContainer, currentPage, false, true);
  
    // Show one page after the current page
    if (currentPage + 1 < totalPages) {
      addButton(buttonsContainer, currentPage + 1);
    }
  
    // Show two pages after the current page
    if (currentPage + 2 < totalPages) {
      addButton(buttonsContainer, currentPage + 2);
    }
  
    // Show "..." if there are pages between the current + 2 and last
    if (totalPages - currentPage > 2) {
      addEllipsis(buttonsContainer);
    }
  
    // Always show the last page
    if (totalPages > 1 && currentPage!==totalPages) {
      addButton(buttonsContainer, totalPages);
    }
  
    return buttonsContainer.map(button => button.outerHTML).join("");
  }
  
  function addButton(container, pageNumber, isElipsis=false, isCurrent = false) {
    let btn = document.createElement("button");
    btn.className = "border border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] w-[40px] h-[40px] rounded-full hover:text-white";
    !isElipsis ? btn.textContent = pageNumber : btn.textContent = '...';
  
    if (isElipsis) {
      btn.classList.add("ellipsis");
    }
  
    if (isCurrent) {
      btn.classList.add("active");
    }
  
    btn.dataset.page = pageNumber;
    container.push(btn);
  }
  
  function addEllipsis(container) {
    let ellipsis = document.createElement("button");
    ellipsis.className = "border border-[#1E1E1E] text-[#1E1E1E] w-[40px] h-[40px] rounded-full cursor-default";
    ellipsis.textContent = "...";
    ellipsis.disabled = true;
    ellipsis.classList.add("ellipsis");
    container.push(ellipsis);
  }
