import PropTypes from 'prop-types'


const header = ({ title }) => {
    return (
        <div className='header'>
            <h1 className='name'>{title}</h1 >
        </div>
    )
}
header.propTypes = {
    title: PropTypes.string,
}
header.defaultProps = {
    title : "Missing title heading"
}
export default header
