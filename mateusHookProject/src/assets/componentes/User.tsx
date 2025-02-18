const user = {
    name: 'Mateus',
    lastName: 'Lucas'
  }
  

function User() {
 return <span>{`${user.name } ${user.lastName}`}</span>;
}
export default User;