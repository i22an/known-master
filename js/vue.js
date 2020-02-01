
var app = new Vue({
    el: '#vue-app',
    data: {
        selectedCentre: {},
        showModal: false,
        centres: [
            {
                name: "I read Quran Centre",
                image: "i-read-quran-centre.jpg",
                description:"29 Lor Marzuki, Singapore 417088",
                desc: "We provide a secure and conducive environment for the holistic development of each child physically, socially, morally, emotionally and intellectually.",//
                website: "http://i-readquran.org/",
                area: {
                    north: true,
                    south: false,
                    east: true,
                    west: false,
                    central: false
                },
                subjects:["Quran"],
                levels:[],
            },
            {
                name: "Andalus",
                image: "andalus.jpg",
                description: "448 Changi Road, Wisma Indah, #04-06 Singapore 419975",
                desc: "Menyediakan pendidikan Islam dengan kesungguhan, kesabaran dan keikhlasan dalam melahirkan Muslim yang berilmu dan bertaqwa berteraskan al-Quran dan al-Sunnah.",
                website:"http://www.andalus.sg/webandalus/index.php",
                area:['East','West','Central','North'],
                area: {
                    north: true,
                    south: false,
                    east: true,
                    west: true,
                    central: true
                },
                subjects:["Quran", "Arabic Languages", "Islamic Studies", "Tafseer"],
                levels:[],
            },
            {
                name: "Aspire Institute",
                image: "aspire-institute.jpg",
                description: "303, WOODLANDS ST.33 #02-175, SINGAPORE 730303",
                desc: "For students who can already read Al-Quran and want to start to understand Al-Quran from basics.",
                website:"https://aspireinstitute.com/",
                area:['East','North','West'],
                area: {
                    north: true,
                    south: false,
                    east: true,
                    west: true,
                    central: false
                },
                subjects:["Quran", "Tafseer"],
                levels:[],
            },
                {
                name: "Darul Huffaz",
                image: "darul-huffaz.jpg",
                description: "218 Changi Rd, PKMS Building, Singapore 419737 ",
                desc: "We are a dedicated group of Quran teachers with the common objective of promoting Quranic reading and its proficiency and understanding among the local Muslims. We also offer courses that augment our core programmes and promote understanding and awareness of Islam.",
                website: "http://darulhuffaz.sg/",
                area:"East",
                area: {
                    north: false,
                    south: false,
                    east: true,
                    west: false,
                    central: false
                },
                subjects:["Quran"],
                levels:[],
            },
            {
                name: "Darul Quran",
                image: "darul-quran.jpg",
                description: "451 Marine Parade Rd, Singapore 449283",
                desc: "Menyediakan pendidikan Islam dengan kesungguhan, kesabaran dan keikhlasan dalam melahirkan Muslim yang berilmu dan bertaqwa berteraskan al-Quran dan al-Sunnah.",
                website:"https://www.mks.org.sg/darul-quran/",
                area:"East",
                subjects:["Quran","Tafseer"],
                levels:[],
            },
            {
                name: "Yameen",
                image: "yameen.jpg",
                description: "52 Bussorah St Singapore 199468",
                desc: "Using a systematic and structured approach, we aim to provide a safe learning environment for beginners or those who have lost touch in learning the Quran. ",
                website:"http://www.yameen.sg/",
                area:"Central",
                area: {
                    north: false,
                    south: false,
                    east: false,
                    west: false,
                    central: true
                },
                subjects:["Quran", "Tafseer"],
                levels:[],
            },
            {
                name: "Muhd Zuhaili",
                image: "muhd-zuhaili.jpg",
                description: "12 Joo Chiat Rd, Singapore 427353",
                desc: "Welcome to MZ Services Singapore",
                website:"https://mzuhailiservices.wordpress.com/about/",
                area:"East",
                area: {
                    north: false,
                    south: false,
                    east: true,
                    west: false,
                    central: false
                },
                subjects:["Quran"],
                levels:[],
            },

            {
                name: "Al-Markaz",
                image: "markaz.jpg",
                description: "58 Bussorah St, Singapore 199474",
                desc: "The Arabic Language Centre",
                website:"http://almarkaz.sg/",
                area: {
                    north: false,
                    south: false,
                    east: false,
                    west: false,
                    central: true
                },
                subjects:["Arabic Language"],
                levels:[],

            },
            {
                name: "Puspa",
                image: "puspa.jpg",
                description: "123456",
                desc: "The Ukhrawi Learning Centre",
                website:"",
                area: {
                    north: false,
                    south: false,
                    east: false,
                    west: false,
                    central: true
                },
                subjects:["Islamic Studies", "Arabic Language"],
                levels:[],

            },
        ],
        areaFilter: "all",
        subjectFilter: "all"
    },
    methods: {
        setAreaFilter: function(area) {
           this.areaFilter= area;
        },
        setSubjectFilter: function(subject) {
            this.subjectFilter= subject;
         },
        toggleShowModal: function(centre = {}){
            this.showModal = !this.showModal;
            this.selectedCentre = centre;
        }  
    },
    computed: {
        filteredCentres: function() {
            console.log("this.subjectFilter", this.subjectFilter)
            console.log("this.areaFilter", this.areaFilter)

            
                return this.centres
                        .filter(centre => {
                            if (this.areaFilter=== "all") {
                                return this.centres
                            }
                            return centre.area[this.areaFilter.toLowerCase()] === true
                        })
                        .filter(centre => {
                            if (this.subjectFilter=== "all") {
                                return this.centres
                            }

                            return centre.subjects.includes(this.subjectFilter)
                        })
        },

    },
  })