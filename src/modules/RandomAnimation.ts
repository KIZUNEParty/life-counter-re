import RandomPick from './PickStart';

function RandomAnimation(result: number, countInp: number | undefined) {
	let returnStyling: number | undefined = undefined;

  const i = (countInp !== undefined) ? countInp : 0

  const random = RandomPick();

  if (i < 10) {
    if (result === random && result !== 1) {
      returnStyling = result + 1;
    } else if (result === random && result === 1) {
      returnStyling = 0;
    } else {
      returnStyling = random;
    }
  } else {
    if (result === random && result !== 1) {
      returnStyling = result + 1;
    } else if (result === random && result === 1) {
      returnStyling = 0;
    } else {
      returnStyling = random;
    }
  }

  const count = i

	return {returnStyling, count};
}

export default RandomAnimation;
