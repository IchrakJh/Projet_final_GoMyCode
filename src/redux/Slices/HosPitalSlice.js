import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    hospitallist:[
      {idH:Math.random(10000),
       titleH:"Hôpital Régional Mohamed Ben Sassi - Gabes",
      descriptionH:"HOPITAL REGIONAL MOHAMED BEN SASSI. Rue Ibn Khaldoun 6014 M'torech, Gabes. 75 292 700 / 75 290 678. 75 292 530. Partager. Y-aller. HOPITAL REGIONAL MOHAMED ",
      secteurH:"Public",
      faxH:"75 292 700",
      adress:"نهج إبن خلدون، Mtorrech 6014",
      imgH:"https://www.businessnews.com.tn/images/album/IMGBN77067hopital-gabes.jpg",
      siteH:"https://www.dawini.tn/search/hopital/19-gabes",
      email:"milste.gabes@outlook.fr",
      telph:"75 292 700",
    },{idH:Math.random(10000),
      titleH:"L'Hôpital Militaire de Gabes",
     descriptionH:"L'Hôpital Militaire de Gabès a pour mission principale de dispenser des soins spécialisés à caractère médical et chirurgical, par l'emploi de technologie moderne et par la mise en place d'organes de gestion appropriés.",
     secteurH:"Public",
     faxH:"75.274.888",
     adress:"Avenue Mongi-Slim; 6000 Gabès",
     imgH:"https://docplayer.fr/docs-images/69/61675247/images/1-0.jpg",
     siteH:"https://www.dawini.tn/search/hopital/19-gabes",
      email:"crom.gabes@yahoo.fr",
     telph:"75.274.888",
   },{idH:Math.random(10000),
    titleH:"Hôpital Hamma Gabes",
   descriptionH:"International Hospitals Group (IHG) revient à la charge. Le groupe britannique, spécialisé dans l’étude, le financement, la réalisation, l’équipement et la gestion d’hôpitaux, a renouvelé son intérêt pour la réalisation de deux hôpitaux à Béja et à Gabès, dans une lettre adressée par son président, Roger M. King, début décembre 2018 au nouveau ministre de la Santé, Dr Abderraouf Cherif, et son collègue en charge du Développement, de l’Investissement et de la Coopération internationale, Zied Ladhari.",
     secteurH:"Public",
     faxH:"75.274.888",
     adress:"Hamma centre",
     imgH:"https://www.helloasso.com/assets/img/photos/collectes/hamma-ad8ce5044be34eac99d13e3b7579a8f5.jpg?bb=0x0x900x450&sb=960x450",
     siteH:"https://www.dawini.tn/search/hopital/19-gabes",
      email:"crom.gabes@yahoo.fr",
     telph:"75.274.888",
 },{idH:Math.random(10000),
  titleH:"Hôpital Bouchemma Gabes",
  descriptionH:"International Hospitals Group (IHG) revient à la charge. Le groupe britannique, spécialisé dans l’étude, le financement, la réalisation, l’équipement et la gestion d’hôpitaux, a renouvelé son intérêt pour la réalisation de deux hôpitaux à Béja et à Gabès, dans une lettre adressée par son président, Roger M. King, début décembre 2018 au nouveau ministre de la Santé, Dr Abderraouf Cherif, et son collègue en charge du Développement, de l’Investissement et de la Coopération internationale, Zied Ladhari.",
  secteurH:"Public",
  faxH:"75.274.888",
  adress:"Bouchemma",
  imgH:"https://www.menzili.tn/upload/photos/2018/10/14/20/02/9shv0og284.jpg",
  siteH:"https://www.dawini.tn/search/hopital/19-gabes",
   email:"crom.gabes@yahoo.fr",
  telph:"75.274.888",
},{idH:Math.random(10000),
  titleH:"Hôpital mareth Gabes",
 descriptionH:"International Hospitals Group (IHG) revient à la charge. Le groupe britannique, spécialisé dans l’étude, le financement, la réalisation, l’équipement et la gestion d’hôpitaux, a renouvelé son intérêt pour la réalisation de deux hôpitaux à Béja et à Gabès, dans une lettre adressée par son président, Roger M. King, début décembre 2018 au nouveau ministre de la Santé, Dr Abderraouf Cherif, et son collègue en charge du Développement, de l’Investissement et de la Coopération internationale, Zied Ladhari.",
     secteurH:"Public",
     faxH:"75.274.888",
     adress:"mareth",
     imgH:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGazRy4ygSkXP7JSUHHDK4WEa8HAApFy1y5hp-GeEhTOcbXMKtxqXnbtkhi-sY2A0iauI&usqp=CAU",
     siteH:"https://www.dawini.tn/search/hopital/19-gabes",
      email:"crom.gabes@yahoo.fr",
     telph:"75.274.888",
},{idH:Math.random(10000),
  titleH:"Hôpital Mohamed Ben Gaied Oudref",
  descriptionH:"International Hospitals Group (IHG) revient à la charge. Le groupe britannique, spécialisé dans l’étude, le financement, la réalisation, l’équipement et la gestion d’hôpitaux, a renouvelé son intérêt pour la réalisation de deux hôpitaux à Béja et à Gabès, dans une lettre adressée par son président, Roger M. King, début décembre 2018 au nouveau ministre de la Santé, Dr Abderraouf Cherif, et son collègue en charge du Développement, de l’Investissement et de la Coopération internationale, Zied Ladhari.",
  secteurH:"Public",
  faxH:"75.274.888",
  adress:"Oudhref",
  siteH:"https://www.dawini.tn/search/hopital/19-gabes",
   email:"crom.gabes@yahoo.fr",
  telph:"75.274.888",
},{idH:Math.random(10000),
  titleH:"POLYCLINIQUE NOUR",
  descriptionH:"l’équipement et la gestion d’hôpitaux, a renouvelé son intérêt pour la réalisation de deux hôpitaux à Béja et à Gabès, dans une lettre adressée par son président, Roger M. King, début décembre 2018 au nouveau ministre de la Santé, Dr Abderraouf Cherif, et son collègue en charge du Développement, de l’Investissement et de la Coopération internationale, Zied Ladhari.",
 secteurH:"Private",
 faxH:"31 301 212",
 adress:"Boulevard Mohammed Ali, Gabes",
 imgH:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYgFVtt3pyMjTku3bt2yLn_XTJmNpNMBq29Ru13rRcIIjL3GiCaWtC5-TvZ4dYGQ1NSo&usqp=CAU",
 siteH:"http://www.santetunisie.rns.tn/images/docs/anis/listecliniquesprivees.pdf",
 email:"crom.gabes@yahoo.fr",
 telph:"31 301 212",
},{idH:Math.random(10000),
  titleH:"Clinique Bon Secours",
  descriptionH:"l’équipement et la gestion d’hôpitaux, a renouvelé son intérêt pour la réalisation de deux hôpitaux à Béja et à Gabès, dans une lettre adressée par son président, Roger M. King, début décembre 2018 au nouveau ministre de la Santé, Dr Abderraouf Cherif, et son collègue en charge du Développement, de l’Investissement et de la Coopération internationale, Zied Ladhari.",
 secteurH:"Private",
 gsmH:"75 278 047",
 faxH:"75 278 047",
 adress:"Avenue Mongi Slim, Gabes",
 imgH:"http://www.toubiblib.com/wp-content/uploads/2018/06/clinique-secours.jpg",
 siteH:"http://www.santetunisie.rns.tn/images/docs/anis/listecliniquesprivees.pdf",
 email:"crom.gabes@yahoo.fr",
 telph:"75 278 047",
},
  ]
}

export const HospitalSlice = createSlice({
  name: 'hospitallist',
  initialState,
  reducers: {
    AddTodoH: (state, action) => {
      state.hospitallist.push(action.payload)
    },
    DeleteTodoH:(state,action)=>{
      state.hospitallist=state.hospitallist.filter(el=>el.idH!==action.payload.idH)
    },
    EditTodoH:(state,action)=>{
      let i =state.hospitallist.findIndex(el=>el.idH==action.payload.idH)
      state.hospitallist[i]={...state.hospitallist[i], descriptionH:action.payload.descriptionH}
    },
  },
})

// Action creators are generated for each case reducer function
export const {AddTodoH,DeleteTodoH, EditTodoH} = HospitalSlice.actions

export default HospitalSlice.reducer