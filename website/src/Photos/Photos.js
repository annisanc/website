import './Photos.css';
import a from "../Images/00.jpg";
import b from "../Images/01.jpg";
import c from "../Images/02.jpg";
import d from "../Images/03.jpg";
import e from "../Images/04.jpg";
import f from "../Images/05.jpg";
import g from "../Images/06.jpg";

var list1 = [a, b, c, d, e, f, g];
var list2 = ['Santa Cruz CA, 2020', 'Santa Cruz CA, 2020', 'Castle Rock CA, 2020', 'Pacific Coast CA, 2020', 'Big Bear CA, 2020', 'Baker California, 2020', 'Hood River OR, 2020'];
const today = new Date();
var potd = list1[(today.getDate()) % 7];
var potdd = list2[(today.getDate()) % 7];

function Photo() {
  return (
    <div className="Photo">
      <h1 className="Photos">Photo of the Day</h1>
      <img src={potd}width="60%"alt='Photo of the Day'/>
      <p>{potdd}</p>
    </div>
  );
}

export default Photo;
