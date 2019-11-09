
var app = new Vue({
    el: '#vue-app',
    data: {
        selectedCentre: {},
        showModal: false,
        centres: [
            {
                name: "I read Quran Centre",
                image: "i-read-quran-centre.jpg",
                description: "We provide a secure and conducive environment for the holistic development of each child physically, socially, morally, emotionally and intellectually.",
                website: "http://i-readquran.org/",
                area:"",
                subjects:[],
                levels:[],
            },
            {
                name: "Andalus",
                image: "andalus.jpg",
                description: "Menyediakan pendidikan Islam dengan kesungguhan, kesabaran dan keikhlasan dalam melahirkan Muslim yang berilmu dan bertaqwa berteraskan al-Quran dan al-Sunnah.",
                website:"http://www.andalus.sg/webandalus/index.php",
                area:"",
                subjects:[],
                levels:[],
            },
            {
                name: "Aspire Institute",
                image: "aspire-institute.jpg",
                description: "For students who can already read Al-Quran and want to start to understand Al-Quran from basics.",
                website:"https://aspireinstitute.com/",
                area:"",
                subjects:[],
                levels:[],
            },
            {
                name: "Darul Huffaz",
                image: "darul-huffaz.jpg",
                description: "We are a dedicated group of Quran teachers with the common objective of promoting Quranic reading and its proficiency and understanding among the local Muslims. We also offer courses that augment our core programmes and promote understanding and awareness of Islam.",
                website: "http://darulhuffaz.sg/",
                area:"",
                subjects:[],
                levels:[],
            },
            {
                name: "Darul Quran",
                image: "darul-quran.jpg",
                description: "Menyediakan pendidikan Islam dengan kesungguhan, kesabaran dan keikhlasan dalam melahirkan Muslim yang berilmu dan bertaqwa berteraskan al-Quran dan al-Sunnah.",
                website:"https://www.mks.org.sg/darul-quran/",
                area:"",
                subjects:[],
                levels:[],
            },
            {
                name: "Yameen",
                image: "yameen.jpg",
                description: "Using a systematic and structured approach, we aim to provide a safe learning environment for beginners or those who have lost touch in learning the Quran. ",
                website:"http://www.yameen.sg/",
                area:"",
                subjects:[],
                levels:[],
            },
            {
                name: "Muhd Zuhaili",
                image: "muhd-zuhaili.jpg",
                description: "Welcome to MZ Services Singapore",
                website:"https://mzuhailiservices.wordpress.com/about/",
                area:"",
                subjects:[],
                levels:[],
            },
        ]
    },
    methods: {
        toggleShowModal: function(centre = {}){
            this.showModal = !this.showModal;
            this.selectedCentre = centre;
        }
    }
  })