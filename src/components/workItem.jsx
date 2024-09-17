export function WorkItem({logo, lifeSpan, title, description, stats = [], currentState}) {
  const workItemLogo = logo ? logo : 'https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg'
  return (
    <div className="flex">
      <div className="flex-grow">
        <small className="font-bold block mb-6">{lifeSpan}</small>
        <div className="flex flex-col justify-center" style={{height: '100px'}}>
          <img src={workItemLogo} alt={title} width="100" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <small className="block mt-6">Current State: <strong>{currentState}</strong></small>
      </div>
    </div>
  )
}