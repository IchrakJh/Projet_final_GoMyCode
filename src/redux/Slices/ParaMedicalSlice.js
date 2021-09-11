import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    paramedicallist:[
      {idPD:Math.random(10000),
      nomPD:"HAMDI SERVICE حمدي خدمات",
      imgPD:"https://www.rdv360.com/images/4645320/123140424-103501591566837-6862311098257156036-o-480w-.jpg",
      adressPD:"39 Boulevard Mohammed Ali, Gabes 6000",
      telphPD:"99 278 922",
      faxPD:"75 278 922",
      gsmPD:"75 278 922",
      sitePD:"https://www.google.com/search?q=paramedical+gabes&biw=947&bih=683&tbm=lcl&sxsrf=AOaemvJgtLA8qgQvaPRibcafHI5E44DkKA%3A1631054528812&ei=wOo3YZT8MI2-aJuSmLgM&oq=PAR&gs_l=psy-ab.3.2.35i39k1l3j0i433i67k1j0i67k1j0i433i67k1j0i67k1l4.732723.977601.0.980657.4.4.0.0.0.0.353.833.0j3j0j1.4.0....0...1c.1.64.psy-ab..0.4.833...0i13k1j0i7i30k1j0i433i131i67k1.0.hk-ectSYIIA#rlfi=hd:;si:12292269964753816748,l,ChFwYXJhbWVkaWNhbCBnYWJlc1oTIhFwYXJhbWVkaWNhbCBnYWJlc5IBHWxhYm9yYXRvcnlfZXF1aXBtZW50X3N1cHBsaWVy;mv:[[33.8864833,10.1126251],[33.866388,10.0894587]]",
      mailPD:"CONTACT@YAHOO.FR",
    },{idPD:Math.random(10000),
      nomPD:"Societe Jumeaux medical",
      imgPD:"https://www.annuaire-publicitaire.com/wp-content/uploads/2020/09/produits-di%C3%A9t%C3%A9tiqie-et-soin-pour-maman-et-b%C3%A9b%C3%A9.jpg",
      adressPD:" rue de combattants, Gabès 6000",
      telphPD:"75 277 442",
      faxPD:"75 277 442",
      gsmPD:"28 277 442",
      sitePD:"https://www.google.com/search?q=paramedical+gabes&biw=947&bih=683&tbm=lcl&sxsrf=AOaemvJgtLA8qgQvaPRibcafHI5E44DkKA%3A1631054528812&ei=wOo3YZT8MI2-aJuSmLgM&oq=PAR&gs_l=psy-ab.3.2.35i39k1l3j0i433i67k1j0i67k1j0i433i67k1j0i67k1l4.732723.977601.0.980657.4.4.0.0.0.0.353.833.0j3j0j1.4.0....0...1c.1.64.psy-ab..0.4.833...0i13k1j0i7i30k1j0i433i131i67k1.0.hk-ectSYIIA#rlfi=hd:;si:12292269964753816748,l,ChFwYXJhbWVkaWNhbCBnYWJlc1oTIhFwYXJhbWVkaWNhbCBnYWJlc5IBHWxhYm9yYXRvcnlfZXF1aXBtZW50X3N1cHBsaWVy;mv:[[33.8864833,10.1126251],[33.866388,10.0894587]]",
      mailPD:"CONTACT@YAHOO.FR",
    },
  ]
}

export const ParamedicalSlice = createSlice({
  name: 'paramedicallist',
  initialState,
  reducers: {
    AddTodoPD: (state, action) => {
      state.paramedicallist.push(action.payload)
    },
    DeleteTodoPD:(state,action)=>{
      state.paramedicallist=state.paramedicallist.filter(el=>el.idPD!==action.payload.idPD)
    },
    DoneTodoPD:(state,action)=>{
      let i =state.paramedicallist.findIndex(el=>el.idPD==action.payload.idPD)
      state.paramedicallist[i]={...state.paramedicallist[i], isDone:!state.paramedicallist[i].isDonePD}
     
    },
    EditTodoPD:(state,action)=>{
      let i =state.paramedicallist.findIndex(el=>el.idPD==action.payload.idPD)
      state.paramedicallist[i]={...state.paramedicallist[i], descriptionPD:action.payload.descriptionPD}
    }
  },
})

// Action creators are generated for each case reducer function
export const {AddTodoPD,DeleteTodoPD, DoneTodoPD,EditTodoPD} = ParamedicalSlice.actions

export default ParamedicalSlice.reducer