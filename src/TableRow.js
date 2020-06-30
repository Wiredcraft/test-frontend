import React, { useState } from "react";


const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}

const TableBody = ({ region }) => {
    const [showDistricts, setShowDistricts] = useState(false)
    const [showTownships, setShowTownships] = useState(false)


    const handleShowDistrictsButton = () => {
        setShowDistricts(!showDistricts)
        }
        

    const handleShowTownshipsButton = () => {
        setShowTownships(!showTownships)
        }

    // const districtArray = region.districts.map(district => district)

    // const townshipArray = region.districts.map(district => (
    //         district.townships.map(township => township)
    ))
    // console.log(region)
    // console.log(districtArray)
    // console.log(townshipArray)

    // townshipArray.forEach(township => console.log(township.map(township => township.name)))

    
        
    
    return (
    <tbody>
        <tr style={{fontWeight: 'bold'}}>
            <td key={region.id}>
                {region.name}
                <Button onClick={handleShowDistrictsButton}>
                    Districts
                </Button>
            </td>
        </tr>
        {districtArray.map(district => (
            <tr style={showDistricts ? {display: 'table-row'} : {display: 'none'} }>
                <td>
                    {district.name}
                    <Button onClick={handleShowTownshipsButton}>Townships</Button>
                </td>
            </tr>
        ))}
        {townshipArray.forEach(element => {
            return (
                element.map(township => (
                    <tr style={showTownships ? {display: 'table-row'} : {display: 'none'} }>
                        <td>{township.name}</td>
                    </tr>
                ))
            )
        })}

        {/* {townshipArray.map(township => (
            <tr style={showTownships ? {display: 'table-row'} : {display: 'none'} }>
                <td>
                    {township.map(townshipTwo => townshipTwo.name)}
                </td>
            </tr>
        ))
        } */}




      {/* {region.districts.map((district) => {
        return (
            <tr style={showDistricts ? {display: 'table-row'} : {display: 'none'} }>
                <td key={district.id}>
                    {district.name}

                    {}






                  {district.townships.map(township => (
                      <React.Fragment key={township.id}>
                      <tr>
                          {district.townships.length >= 1 ? (
                              <Button onClick={() => handleShowTownshipsButton(township.id)}>Townships</Button>
                          ) : null}
                          {showTownships[township.id] ? <td>{township.name}</td> : null}
                      </tr>
                      </React.Fragment>
                  ))}
                </td>
            </tr>
        );
      })} */}
    </tbody>
  );
};

export default TableBody;
