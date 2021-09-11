import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    parapharmacylist:[
      {idPy:Math.random(10000),
        nomPP:"Parapharmacie BEN SASSI",
        imgPP:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLJYF43Q_0_YdBf_Wbkq_8szFGtiDYoU2TeX9nXf_iYaeLr-UH90Tf-fyD6YS7u8CH18&usqp=CAU",
        adressPP:"Labo Photo, N°53 , Rue Ibn Khaldoun , Cité Ezzouhour , Route de L'Hôpital Régional de Gabes (à Coté de, Rue Ibn Khaldoun, Gabès, Chine",
        telphPP:"75 021 847",
        faxPP:"75 021 847",
        gsmPP:"24 021 847",
        sitePP:"https://www.google.com/search?q=parapharmacie+gabes&biw=947&bih=683&tbm=lcl&sxsrf=AOaemvL3cH1kajQqqfk3Z3bO7yOmkWd8cA%3A1631046351551&ei=z8o3YdmBIfaHxc8P-fa6kAk&oq=para+gabes&gs_l=psy-ab.3.0.0i7i30k1l5j0i30k1j0i7i5i30k1.8173376.8174356.0.8176504.4.4.0.0.0.0.230.695.0j3j1.4.0....0...1c.1.64.psy-ab..0.4.693....0.8kYi_zZOEUE#rlfi=hd:;si:15820649099651530661,l,ChNwYXJhcGhhcm1hY2llIGdhYmVzWhsiE3BhcmFwaGFybWFjaWUgZ2FiZXMqBAgDEACSARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wqgEVEAEqESINcGFyYXBoYXJtYWNpZSgE;mv:[[33.8884877,10.1148136],[33.8534888,10.061060999999999]]",
        mailPP:"CONTACT@YAHOO.FR",
      },{
      idPy:Math.random(10000),
        nomPP:"Parapharmacie Paradiem Gabes",
        imgPP:"https://enseigne.tn/wp-content/uploads/2019/02/facade-pharmacie-tunisie.jpg",
        adressPP:"Labo Photo, N°53 , Rue Ibn Khaldoun , Cité Ezzouhour , Route de L'Hôpital Régional de Gabes (à Coté de, Rue Ibn Khaldoun, Gabès, Chine",
        telphPP:"26 836 000",
        faxPP:"75 836 000",
        gsmPP:"75 836 000",
        sitePP:"https://www.google.com/search?q=parapharmacie+gabes&biw=947&bih=683&tbm=lcl&sxsrf=AOaemvL3cH1kajQqqfk3Z3bO7yOmkWd8cA%3A1631046351551&ei=z8o3YdmBIfaHxc8P-fa6kAk&oq=para+gabes&gs_l=psy-ab.3.0.0i7i30k1l5j0i30k1j0i7i5i30k1.8173376.8174356.0.8176504.4.4.0.0.0.0.230.695.0j3j1.4.0....0...1c.1.64.psy-ab..0.4.693....0.8kYi_zZOEUE#rlfi=hd:;si:15820649099651530661,l,ChNwYXJhcGhhcm1hY2llIGdhYmVzWhsiE3BhcmFwaGFybWFjaWUgZ2FiZXMqBAgDEACSARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wqgEVEAEqESINcGFyYXBoYXJtYWNpZSgE;mv:[[33.8884877,10.1148136],[33.8534888,10.061060999999999]]",
        mailPP:"CONTACT@YAHOO.FR",
      },{idPy:Math.random(10000),
        nomPP:"Bouabdellah Béchir",
        imgPP:"https://www.groupeneodia.com/wp-content/uploads/2017/06/groupe-neodia-habillage-facade-pharmacie-realisation-candeago.jpg",
        adressPP:"Av.de la République - شارع الجُمهوريّة, Gabes",
        telphPP:"75 272 529",
        faxPP:"75 272 529",
        gsmPP:"55 272 529",
        sitePP:"https://www.google.com/search?q=parapharmacie+gabes&biw=947&bih=683&tbm=lcl&sxsrf=AOaemvL3cH1kajQqqfk3Z3bO7yOmkWd8cA%3A1631046351551&ei=z8o3YdmBIfaHxc8P-fa6kAk&oq=para+gabes&gs_l=psy-ab.3.0.0i7i30k1l5j0i30k1j0i7i5i30k1.8173376.8174356.0.8176504.4.4.0.0.0.0.230.695.0j3j1.4.0....0...1c.1.64.psy-ab..0.4.693....0.8kYi_zZOEUE#rlfi=hd:;si:15820649099651530661,l,ChNwYXJhcGhhcm1hY2llIGdhYmVzWhsiE3BhcmFwaGFybWFjaWUgZ2FiZXMqBAgDEACSARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wqgEVEAEqESINcGFyYXBoYXJtYWNpZSgE;mv:[[33.8884877,10.1148136],[33.8534888,10.061060999999999]]",
        mailPP:"CONTACT@YAHOO.FR",
      },{idPy:Math.random(10000),
        nomPP:"PARA DI BIO",
        imgPP:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsHD54Wk1SbLr8yEAf2Ul9tNk0M_anjRJefFQWiW9f518jLohrk5jafgaCIqogUEYp2c&usqp=CAU",
        adressPP:"27, 25 Avenue Mongi Slim, Gabès",
        telphPP:"75 425 505",
        faxPP:"75 425 505",
        gsmPP:"58 425 505",
        sitePP:"https://www.google.com/search?q=parapharmacie+gabes&biw=947&bih=683&tbm=lcl&sxsrf=AOaemvL3cH1kajQqqfk3Z3bO7yOmkWd8cA%3A1631046351551&ei=z8o3YdmBIfaHxc8P-fa6kAk&oq=para+gabes&gs_l=psy-ab.3.0.0i7i30k1l5j0i30k1j0i7i5i30k1.8173376.8174356.0.8176504.4.4.0.0.0.0.230.695.0j3j1.4.0....0...1c.1.64.psy-ab..0.4.693....0.8kYi_zZOEUE#rlfi=hd:;si:15820649099651530661,l,ChNwYXJhcGhhcm1hY2llIGdhYmVzWhsiE3BhcmFwaGFybWFjaWUgZ2FiZXMqBAgDEACSARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wqgEVEAEqESINcGFyYXBoYXJtYWNpZSgE;mv:[[33.8884877,10.1148136],[33.8534888,10.061060999999999]]",
        mailPP:"CONTACT@YAHOO.FR",
      },{idPy:Math.random(10000),
        nomPP:"Parapharmacie Lavander",
        imgPP:"https://www.enseignemalin.com/content/cache/diaporama_photo/800x600/5beae7c85cd25_alphega-pharmacie-enseignemalin-facade.jpg",
        adressPP:"264 Av. Omar Ibn El Khattab, Teboulbou",
        telphPP:"75 517 411",
        faxPP:"75 517 411",
        gsmPP:"20 517 411",
        sitePP:"https://www.google.com/search?q=parapharmacie+gabes&biw=947&bih=683&tbm=lcl&sxsrf=AOaemvL3cH1kajQqqfk3Z3bO7yOmkWd8cA%3A1631046351551&ei=z8o3YdmBIfaHxc8P-fa6kAk&oq=para+gabes&gs_l=psy-ab.3.0.0i7i30k1l5j0i30k1j0i7i5i30k1.8173376.8174356.0.8176504.4.4.0.0.0.0.230.695.0j3j1.4.0....0...1c.1.64.psy-ab..0.4.693....0.8kYi_zZOEUE#rlfi=hd:;si:15820649099651530661,l,ChNwYXJhcGhhcm1hY2llIGdhYmVzWhsiE3BhcmFwaGFybWFjaWUgZ2FiZXMqBAgDEACSARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wqgEVEAEqESINcGFyYXBoYXJtYWNpZSgE;mv:[[33.8884877,10.1148136],[33.8534888,10.061060999999999]]",
        mailPP:"CONTACT@YAHOO.FR",
      },
  ]
}

export const ParapharmacySlice = createSlice({

  name: 'parapharmacylist',
  initialState,
  reducers: {
    AddTodoPP: (state, action) => {
      state.parapharmacylist.push(action.payload)
    },
    DeleteTodoPP:(state,action)=>{
      state.parapharmacylist=state.parapharmacylist.filter(el=>el.idPy!==action.payload.idPy)
    },
    DoneTodoPP:(state,action)=>{
      let i =state.parapharmacylist.findIndex(el=>el.idPy==action.payload.idPy)
      state.parapharmacylist[i]={...state.parapharmacylist[i], telphPP:!state.parapharmacylist[i].telphPP}
     
    },
    EditTodoPP:(state,action)=>{
      let i =state.parapharmacylist.findIndex(el=>el.idPy==action.payload.idPy)
      state.parapharmacylist[i]={...state.parapharmacylist[i], adressPP:action.payload.adressPP}
    }
  }
    
})

// Action creators are generated for each case reducer function
export const {AddTodoPP,DeleteTodoPP, DoneTodoPP,EditTodoPP} = ParapharmacySlice.actions

export default ParapharmacySlice.reducer