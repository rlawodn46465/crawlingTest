import axios from 'axios';
import cheerio from 'cheerio';
function OPList() {
  async function getHTML(){
    try{
      return await axios.get("https://www.op.gg/champions"+"?region=global&tier=platinum_plus&position=top");
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
    console.log(text);
  }
  parsing();
}

export default OPList();