$(document).ready(function () {
  $('#toggle-btn').click(function () {
    console.log("sdfhjkshdf")
    $('._green').toggle();
  });

  $('.hot__tab, .all__tab').click(function () {
    let tab_name = $(this)[0].className
    console.log(tab_name)
    if (tab_name === 'all__tab') {
      $(document).find('.main__games_content').html(`
      <div class="game__group_list list-group">
          <ul class="list">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li class="show-more-btn">Show more</li>
          </ul>
          <ul class="list column hidden">
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
              <li>Item 9</li>
              <li>Item 10</li>
          </ul>

      </div>
      `)
      const list = $('.list');
      const showMoreBtn = $(document).find('.show-more-btn');
      console.log(showMoreBtn)
      const hiddenList = $('.hidden');

      if (list.children().length > 5) {
        showMoreBtn.css('display', 'flex'); // show the button if there are more than 5 items
        // showMoreBtn.css('display', 'flex' ); // show the button if there are more than 5 items

        showMoreBtn.on('click', function () {
          hiddenList.toggle(); // toggle the display of the second list when the button is clicked
        });
      }
    } else if (tab_name === 'hot__tab') {
      $(document).find('.main__games_content').html(``)
    }
    $(this).addClass('active').siblings().removeClass('active');
  });

  
  let offloadDiv = $('.hot-offload');
  let toggleButton = $('#toggle-offload');

  toggleButton.click(function () {
    if (offloadDiv.css('display') === 'block') {
      offloadDiv.css('display', 'none');
    } else {
      offloadDiv.css('display', 'block');
    }
  });

  $('.minus_wrapper').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus_frame').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
 

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
      $('.time-ticket').fadeOut(200, function () {
        $(this).addClass('visually-hidden');
      });
      $('.time-ticket-mini').removeClass('visually-hidden').fadeIn(200);
    } else {
      $('.time-ticket-mini').fadeOut(200, function () {
        $(this).addClass('visually-hidden');
      });
      $('.time-ticket').removeClass('visually-hidden').fadeIn(200);
    }
  });

  $('.nav-link').on('click', function() {
    const tabId = $(this).attr('data-bs-target');
    switchTab(tabId);
  
    // Remove active class from all nav links
    $('.nav-link').removeClass('active');
  
    // Add active class to clicked nav link
    $(this).addClass('active');
  });
  

  const hotColdCheckbox = document.querySelector('.hotCold');
  const coldHotList = document.querySelector('.coldHotList');
  
  hotColdCheckbox.addEventListener('change', () => {
    if (hotColdCheckbox.checked) {
      coldHotList.style.display = 'flex';
    } else {
      coldHotList.style.display = 'none';
    }
  });
  
  $('.coldHotList_items').click(function() {
    $('.coldHotList_items').removeClass('active');
    $(this).addClass('active');
  });
});


function switchTab(tabId) {
  // Get the tab to switch to
  const tab = $(`${tabId}`);

  // Deactivate all tabs
  $('.tab-pane').removeClass('active show');

  // Activate the selected tab
  tab.addClass('active show');
}


export function buttonActiveAnimator (thisParam){
  anime({
    targets: thisParam,
    scale: [0.3, 1],
    easing: 'easeInQuad',
    duration: 300
  });
}


const textarea = document.getElementById("myTextarea");

textarea.addEventListener("input", () => {
    if (textarea.value.trim() !== "") {
      textarea.classList.remove("empty");
    } else {
      textarea.classList.add("empty");
  }
});






































/*
const checkbox = document.querySelector('#my-checkbox');
const checkboxLabel = document.querySelector('.checkbox-custom');

checkbox.addEventListener('click', function () {
  if (this.checked) {
    checkboxLabel.classList.add('checked');
  } else {
    checkboxLabel.classList.remove('checked');
  }
});

*/
// const hotColdCheckbox = document.querySelector('#hotCold');
// const hotColdWrapper = document.querySelector('.hotCold__wrapper');
// const coldHotList = document.querySelector('.coldHotList');

// hotColdCheckbox.addEventListener('click', function () {
//   hotColdWrapper.classList.toggle('active');
//   coldHotList.classList.toggle('active');
// });

// // Get the "Hot/Cold" checkbox element
// const hotColdCheckbox = document.querySelector('#hotCold');

// // Get the parent element of the checkbox
// const hotColdWrapper = hotColdCheckbox.parentElement;
// console.log(hotColdWrapper)
// // Get the child element of the parent that contains the list items
// const coldHotList = hotColdWrapper.querySelector('.coldHotList');
// console.log(coldHotList)
// // Get all the list item elements
// const coldHotListItems = coldHotList.querySelectorAll('.coldHotList_items');

// // Add an onclick listener to the "Hot/Cold" checkbox
// hotColdCheckbox.addEventListener('click', function () {
//   // Toggle the "coldHotList" class of the child element
//   coldHotList.classList.toggle('coldHotList');

//   // Toggle the background of the parent element
//   hotColdWrapper.classList.toggle('hotCold__wrapper--active');
// });

// // Add an onclick listener to each list item element
// coldHotListItems.forEach(function (item) {
//   item.addEventListener('click', function () {
//     // Remove the "active" class from all list items
//     coldHotListItems.forEach(function (item) {
//       item.classList.remove('active');
//     });

//     // Add the "active" class to the clicked list item
//     this.classList.add('active');
//   });
// });

































// const list = document.querySelector('.list');
// const showMoreBtn = document.querySelector('.show-more-btn');
// const hiddenList = document.querySelector('.hidden');

// if (list.children.length > 4) {
//   showMoreBtn.style.display = 'block'; // show the button if there are more than 5 items

//   showMoreBtn.onclick = function() {
//     if (hiddenList.style.display === 'none') {
//       hiddenList.style.display = 'flex'; // display the second list when the button is clicked
//     } else {
//       hiddenList.style.display = 'none'; // hide the second list when the button is clicked again
//     }
//   };
// }
$(document).ready(function () {

});

