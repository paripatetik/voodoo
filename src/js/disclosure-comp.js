const innerHTML = `
    <style>
        .disclosure{
            background: black;
            padding: 12px;
            @media(min-width:476px){
                padding: 25px
            }
            border-radius: 4px;
            margin-top: 20px;
            color: white;
        }
        .disclosure__top{
            display: flex;
            align-items: center;
            gap: 24px;
        }
        .disclosure__logo{
            display: flex;
            gap: 6px;
        }
        .disclosure button{
            background:transparent;
            border: none;
        }
        .disclosure svg{
            width: 24px;
            height: 24px;
        }
        .disclosure span{
            text-transform: uppercase;
            font-family: Space Grotesk;
            font-weight: 700;
            font-size: 16px;
        }
        .disclosure p{
            flex: 1 1 auto;
            font-family: Space Grotesk;
            font-weight: 500;
            font-size: 14px;
        }
        .disclosure__text{
            display: none;
            height: 0px;
            overflow: hidden;
        }
        .disclosure.active  .disclosure__text{
            display: block;
            height: auto;
        }
    </style>
    <div class='disclosure'>
        <div class='disclosure__top'>
            <div class='disclosure__logo'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 8v4M12 16h.01"/>
                </svg>
                <span>Alpha</span>
            </div>
            <p>Important info</p>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="#FCF7E6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>
                </svg>
            </button>
        </div>
        <p class='disclosure__text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorem quidem eligendi dolore odio sapiente. Doloremque, exercitationem error! Rerum, voluptates!
        </p>
    </div>
`;

class CustomElement extends HTMLElement {
    constructor(){
        super();
        let root = this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = innerHTML;
        let closureBtn = root.querySelector('.disclosure button');
        closureBtn.addEventListener('click', function(e){
            e.target.closest('.disclosure').classList.toggle('active');
        });
    }
    connectedCallback(){
        this.innerHTML = innerHTML;
    }
}

window.customElements.define('disclosure-comp', CustomElement)