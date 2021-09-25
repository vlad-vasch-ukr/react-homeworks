import './main.scss';

function AppModal({ showModal, closeModal, user }) {
  const fields = ['name', 'age', 'gender', 'balance', 'phone', 'email', 'company']
  return (
    <div className={ ['AppModal', showModal ? 'show' : ''].join(' ') } onClick={ closeModal }>
      <div className="AppModal__content" onClick={ e => e.stopPropagation() }>
        <img src={ user.picture } alt="avatar" className="AppModal__picture" />
        {
          fields.map(field => {
            return (
              <div className="AppModal__field" key={ field }>
                <span>{ field }:</span>
                <span>{ user[field] }</span>
              </div>
            )
          })
        }
        <button className="AppModal__close" onClick={ closeModal }>x</button>
      </div>
    </div>
  )
}

export default AppModal