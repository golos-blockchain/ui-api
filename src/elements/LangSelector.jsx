import React, { Component } from 'react';
import types from "../steemjs/api/types.json";
import ParameterCss from "./Parameter.css";
import ArrayParameter from "./ArrayParameter";
import ObjectParameter from "./ObjectParameter";
import {getDesc, Languages} from "../utils/helpers";
import LangSelectorCss from "./LangSelector.css";

class LangSelector extends Component {
    
  constructor() {
      super();
  }  
    
  render() {
    let selLang = this.props.lang;
    console.log("selLang = ", selLang); 
    return (
        <select name={"lang"} onChange={this.props.onChange} value={selLang}>
            {Languages.map((lang) => <option value={lang.key} >{flags[lang.key]}</option>)}
        </select>
    );
  }
}

export default LangSelector;

const flags = {
    ru : <img className="Flag-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAABoElEQVRoQ+2bz0oCURTGvyMYai6NVr2HT2ARtCjUNkmEaOseo1XrCkLQTUwltKo38CHatUnKVv4ZHPLETAhGM+LZ3r67Gpi5wveb3znjDPcKFsbQD3YEOIXOioBsApDF8w4eK6B9SKqnwGU+k36aZ4yCq2pm5ActAQ4dDL9yJAVu1zPpExGZRGDGk2lbgaOVf8HhCwXo5LJrNRn6QUlUnx3Oao6mItsy8oN7qB6YZ7s8QaQro8n0HUDB5Zz2bPoWglH7ROdnzAgm4R4TDMHYyp/G0BgaYyNAY2y82GNojNGY3fMX/vONYSYEE28SwST1GBpDY0zdl6XEUjIJAxpDY2iMjQCNsfFij6ExNMZGgMbYeMmg0uBnh7jPDgST8BJJMARjajLsMUlPJZYSS4mlZCLAUrLhYvNdYgzX4P2Bo4PQmAcA+zbRnL+6K4NyswThOt9ft1oQbh0APsrNtohyZXi0fUA6hburWgTmtXKWzemwBUHV+SJZFlDgjTV/vOVd/OwlmI/Pan0PmqorUAQQ7j75D6MvQO8LuNnwrh/ngb8BRmvCMxeBEsEAAAAASUVORK5CYII=" alt="ru" />,
    en : <img className="Flag-img"  src="data:image/png;base64,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" alt="ru" />,
    de : <img className="Flag-img"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAABlElEQVRoQ+2bQUsCQRiG388uqdegv1KdZAyzhQ7FWpekIqLf1CUEvcRWQgfJ0rplP6UQT+Fup51wY2ElV/iu0zunBUfhfXzmXV1mBJlR9Rp1AJeA3QCwDkCyrzt4bQF8AvIO4GrYCx7TjEnwSuV0daX01QLkyMHwikj2JiwXzkZBECVgqp7fBnCs+ASXp3aGvdummF2/JoK+y0m12azFjhjPvxPgQPtmp+dbdKXq+WMAa04H1Yf7mIGZNTPHPIGYYHKUIBiC0bUFjaExNEZHgMboeLFjaIzSmEnjgr98FzATgllsEsHkdQyNoTGq9uVS4lJSCQMaQ2NojI4AjdHxYsfQGBqjI0BjdLzYMXnGhM+Gz2MWPY8hmJx/1wRDMKr2FRpDY2iMigBv1zpc7JglxnAP3l84EwkH5h4W+zrRHJ8t6Mr3k6nF3Oc7903HsPVkZ3g4MG1Y7gxP6Ag6pe2XZgLGvm0Wo2mxBeDQ8UWyPJ4gKJaiE9ka/Z4lSMe0b/akIOeZ0yf/gVNy+sTa+Lpce31IA/8AoCOjA2863CcAAAAASUVORK5CYII=" alt="ru" />,
    es : <img className="Flag-img"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAACpElEQVRoQ+2bu2/TUBTGv+OQhx3oi0JZWGBioGJBKkJi4tEBBlBSFhCtKtKFhQ3+AsTExFBAqBIsKEAlBsRjYAChTEhISEzAwELUJqUVcV6yD7JR2kDj2DdUauKeO0XxOffe7+dz7r22jglNrZCeGSfYMwweA2gEADVfD+FvBjhPoBxDm92ZnX3R0OgK/zY5megrxeYAPh9C8QqS6JGJ5NTe7K2yC2YxlXlAxBcUegitKTM9HH585yIVUpmTIH4ZWqWdCGM6RYV05gnA5zrxD7HPPBXSlxcADIdYZAfS+IcDhjvwDLuLLWA8brGAETBq2U/8ISVrTAtmAsYrlSRiWpORiJGIkcVXjUAnEVP9GEd8tPrXWxkrH0HplQHjhIlte6y1bhlw7Q9VN2Rim91J2zWmeGMQ2oCN2P46EGNYCxHUv0QBZ4MnILqvjshuC6gR6l+jsJY0DF1f2mxNGzK+LxjVUQSMBzEBI2DUkkkiRiJGImYdgeLNQcBWAEPA0LUtsF3/vN0Pe0ULTEbbYWPgynJg+242bHuOKT033NNs0BY/WEPydCmoeVfbtQVjLUawfK/vz0nXrxHQP7WCyEjTY4KfTxdf933tUH6XQPmt7itBP1qBfqzsa9crBr5gHCHmGx2VXMJTU+JwFcZxs1c0B5pnIDBOT9VPMZivDXBlrQCC4uwCiY/WAg3WS0aBwTii2CSU3+uofY4idqCOxJEKtKTKft47aJTA9I6s/5+pgPFgKGAEjFp6ScR4RYyUgbQmI9UOEjGKa4ykkncqSQ3eOjZccNaYpwDOqgVa6K3npc631T0mjEtl+D9gVivDnf+/p6/qBv+aA2Ei9EnSTiAha/L2S6vfEjRsixPTZ8DaNANjAJyvT7ZCyxOQs4D7u7J3nzUE/wYz4yRy5UVdYwAAAABJRU5ErkJggg==" alt="ru" />,
    
    
}
