import * as React from 'react';
import Svg, { G, Text, TSpan, Path } from 'react-native-svg';

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={78} height={25.977} viewBox="0 0 78 25.977">
      <Text transform="translate(32 20.977)" fill="#7540ee" fontSize={18} letterSpacing=".016em">
        <TSpan x={0} y={0}>
          {'Recut'}
        </TSpan>
      </Text>
      <Path
        d="M18 20.976a1.5 1.5 0 00-3 0v2.25a.75.75 0 01-.751.751H.75a.749.749 0 01-.75-.751v-2.25a3 3 0 013-3h3V.75A.749.749 0 016.75 0h16.5a.75.75 0 01.75.75v20.226a3 3 0 11-6 0z"
        fill="#7540ee"
      />
    </Svg>
  );
}

export default Logo;
