//step1 요구사항 구현을 위한 전략

//[원본]
//에스프레소 메뉴에 새로운 메뉴를 확인 버튼 또는 엔터키 입력으로 추가한다.
    //메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
    //사용자 입력값이 빈 값이라면 추가되지 않는다.
//메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
    //메뉴 수정시 브라우저에서 제공하는 prompt 인터페이스를 활용한다.
//메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
    //메뉴 삭제시 브라우저에서 제공하는 confirm 인터페이스를 활용한다.
//총 메뉴 갯수를 count하여 상단에 보여준다.
    //추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.


//[TIP]
// 1) 쪼개기 - 한 문장에 두 개 이상의 요구사항이 있을 경우, 한 문장에 하나의 요구사항만 있을 수 있게 쪼개기
// 2) 카테고리 - 소주제에 해당하는 카테고리를 만들어 요구사항 정리하기
// 3) 순서 - 요구사항의 동작 순서에 맞게 정렬하기


//[수정(정리)]
// todo 메뉴 추가
// - 메뉴의 이름을 입력받고 확인 버튼을 누르면 메뉴가 추가된다
// - 메뉴의 이름을 입력받고 엔터키 입력으로 추가한다
// - 추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.
// - 총 메뉴 갯수를 count 하여 상단에 보여준다
// - 메뉴가 추가되고 나면 input은 빈 값으로 초기화한다
// - 사용자 입력값이 빈 값이라면 추가되지 않는다

// todo 메뉴 수정
// - 메뉴의 수정 버튼을 클릭 이벤트를 받고, 메뉴 수정하는 모달창이 뜬다
// - 모달창에서 신규 메뉴명을 입력받고, 확인버튼을 누르면 메뉴가 수정된다

// todo 메뉴 삭제
// - 메뉴 삭제 버튼 클릭 이벤트를 받고 메뉴 삭제 컨펌창이 뜬다
// - 확인 버튼을 클릭하면 메뉴가 삭제된다
// - 총 메뉴 갯수를 count하여 상단에 보여준다

const $ = (selector) => document.querySelector(selector);

function App(){
    $("#espresso-menu-form").addEventListener("submit", (e)=>{
        e.preventDefault();
    })


    $("#espresso-menu-name").addEventListener("keypress", (e)=>{
        if(e.key === "Enter"){
            const espressoMenuName = $("#espresso-menu-name").value;
            const menuItemTempleate = (espressoMenuName) =>{
                return `
                    <li class="menu-list-item d-flex items-center py-2">
                    <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
                    <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                    >
                    수정
                    </button>
                    <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                    >
                    삭제
                    </button>
                </li>`;
            }; 
            $("espresso-menu-list").innerHTML = menuItemTempleate(espressoMenuName);
        }
    })
}

App();