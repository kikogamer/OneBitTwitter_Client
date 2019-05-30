// The initial state of the App
const initialState = { hashtags: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TRENDINGS':
      return { hashtags: [['#OneBitCode', '1.6k'], ['#RubyOnRails', '20k']] }
    default:
      return state;
  }
}