import React, { useState } from 'react'
import sonnets from '../db/sonnets'

const DEFAULT_QUERY = {
  procreate: false,
  useOfImagery: false,
  floral: false,
  facial: false,
  eye: false,
  fire: false,
  field: false,
  brow: false,
  clothing: false,
  mirror: false,
  leaves: false,
  frost: false,
  trees: false,
  snow: false,
  bareness: false,
  sun: false,
  musicalInstrument: false,
  tears: false,
  genderOfSubjectExplicit: false,
  genderOfSubject: 'male'
}
const SonnetSearch = () => {
  const [query, setQuery] = useState(DEFAULT_QUERY)
  const [result, setResult] = useState([])

  const handleSubmit = (e) => {
    let newResult = ['']
    for (const property in query) {
      newResult.push(`${property}: ${query[property]}`)
    }
    // e.preventDefault()
    // setResult(Log(query))
    setResult(newResult)
  }
  return (
    <div>SonnetSearch
      <p>Should it be about the imperative to procreate?</p>
      <input type="radio" name="procreate" id="procreatetrue" value="true" />
      <label htmlFor="procreatetrue">yes</label>
      <input type="radio" name="procreate" id='procreatefalse' value="false" />
      <label htmlFor="procreatefalse">no</label>

      <p>Should it be dependent on imagery?</p>
      <input type="radio" name="useOfImagery" id="imagerytrue" value="true" />
      <label htmlFor="imagerytrue">yes</label>
      <input type="radio" name="useOfImagery" id='imageryfalse' value="false" />
      <label htmlFor="imageryfalse">no</label>


      <p>Types of imagery:</p>
      <input type="checkbox" id="floral" name="floralImagery" value="floral" disabled />
      <label htmlFor="floral">floral</label>

      <input type="checkbox" id="face" name="facialImagery" value="face" disabled />
      <label htmlFor="face">facial</label>

      <input type="checkbox" id="eyes" name="eyeImagery" value="eyes" disabled />
      <label htmlFor="eyes">eyes</label>

      <input type="checkbox" id="fire" name="fireImagery" value="fire" disabled />
      <label htmlFor="fire">fire</label>

      <input type="checkbox" id="field" name="fieldImagery" value="true" disabled />
      <label htmlFor="field">field</label>

      <input type="checkbox" id="brow" name="browImagery" value="true" disabled />
      <label htmlFor="brow">brow</label>

      <input type="checkbox" id="clothing" name="clothingImagery" value="true" disabled />
      <label htmlFor="clothing">clothing</label>

      <input type="checkbox" id="mirror" name="mirrorImagery" value="true" disabled />
      <label htmlFor="mirror">mirror</label>

      <input type="checkbox" id="leaves" name="leavesImagery" value="true" disabled />
      <label htmlFor="leaves">leaves</label>

      <input type="checkbox" id="frost" name="frostImagery" value="true" disabled />
      <label htmlFor="frost">frost</label>

      <input type="checkbox" id="trees" name="treesImagery" value="true" disabled />
      <label htmlFor="trees">trees</label>

      <input type="checkbox" id="snow" name="snowImagery" value="true" disabled />
      <label htmlFor="snow">snow</label>

      <input type="checkbox" id="bareness" name="barenessImagery" value="true" disabled />
      <label htmlFor="bareness">bareness</label>

      <input type="checkbox" id="sun" name="sunImagery" value="true" disabled />
      <label htmlFor="sun">sun</label>

      <input type="checkbox" id="musicInstrument" name="musicInstrumentImagery" value="true" disabled />
      <label htmlFor="musicInstrument">musical instrument</label>

      <input type="checkbox" id="tears" name="tearsImagery" value="true" disabled />
      <label htmlFor="tears">tears</label>

      <p>Gender of subject explicit?</p>
      <input type="radio" name="subjectGenderExplicit" id="SGEtrue" value="true" />
      <label htmlFor="SGEtrue">yes</label>
      <input type="radio" name="subjectGenderExplicit" id='SGEfalse' value="false" />
      <label htmlFor="SGEfalse">no</label>

      <p>Gender of subject:</p>
      <input type="radio" name="genderOfSubject" id="GOStrue" value="true" disabled />
      <label htmlFor="GOStrue">yes</label>
      <input type="radio" name="genderOfSubject" id='GOSfalse' value="false" disabled />
      <label htmlFor="GOSfalse">no</label>


      <input type="button" value="Submit" id="submitBtn" className='block' onClick={handleSubmit}/>
      <input type="reset" ></input>

      <p>Result:</p>
      {result.map(line => <p>{line}</p>)}
    </div>
  )
}

export default SonnetSearch