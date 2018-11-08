import React, { Component } from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData, removeCharacter }) => {
  const rows = characterData.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>
        {row.job}
        <button onClick={() => removeCharacter(index)}>Delete</button>
      </td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
