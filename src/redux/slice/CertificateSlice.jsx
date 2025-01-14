import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    certificatesdata: []
}
export const getCertificates = createAsyncThunk('certificates/getCertificates', async () => {
    return fetch('http://localhost:3000/src/DB/certificates.json')
        // return fetch(`${process.env.BASE_API_URL_HOST}/auth/getAllcertificates-no-admin`)
        .then((respons) => { return respons.json() })
});
const certificatesSlice = createSlice({
    name: "certificates",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCertificates.pending, () => { })
        builder.addCase(getCertificates.fulfilled, (state, action) => {
            state.certificatesdata = []
            for (const key in action.payload) {
                state.certificatesdata.push({
                    id: action.payload[key].id,
                    title: action.payload[key].title,
                    company: action.payload[key].company,
                    publishedON: action.payload[key].publishedON,
                    image: action.payload[key].image,
                    description: action.payload[key].description,
                })
            }
        })
        builder.addCase(getCertificates.rejected, () => { })
    }
});
export default certificatesSlice;
export const certificatesdata = (state) => state.certificates.certificatesdata;
