import axios from 'axios';
import cheerio from 'cheerio';
function OPList() {
  async function getHTML(){
    try{
      return await axios.get("/api"+"?region=global&tier=platinum_plus&position=top");
    } catch (err) {
      console.log(err);
    }
     
  }
  
  async function parsing(){
    const html = await getHTML();
    const $ = cheerio.load(html.data);
    const courseList = $(
      "#content-container > .css-1fcwcq0 > main > div > table > tbody > tr > .css-1wvfkid"
    );
    let text = courseList.text();
    let ga = text.split("%");
    let te = ga.map((data) => data + "%");
    console.log(te);
  }
  parsing();
}

export default OPList();