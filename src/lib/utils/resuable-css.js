import styled, { css } from 'styled-components';

export const dynamicStyles = (resolutions, apiKey, cssName, apiKey2, cssName2) => {
  return resolutions?.map((resolution) => {
    if (apiKey2) {
      if (resolution[apiKey] !== undefined && resolution[apiKey2] !== undefined) {
        return css`
          @media only screen and (max-width: ${resolution['width']}px) {
            ${cssName}: ${resolution[apiKey]};
            ${cssName2}: ${resolution[apiKey2]};
          }
        `;
      }
    } else if (resolution[apiKey] !== undefined) {
      return css`
        @media only screen and (max-width: ${resolution['width']}px) {
          ${cssName}: ${resolution[apiKey]};
        }
      `;
    }
  });
};

export const h1Styles = (resolutions) => {
  return resolutions?.map((resolution) => {
    const { width, h1 } = resolution;
    if (h1 !== undefined) {
      return css`
        @media only screen and (max-width: ${width}px) {
          font-size: ${h1};
        }
      `;
    }
  });
};

export const h2Styles = (resolutions) => {
  return resolutions?.map((resolution) => {
    const { width, h2 } = resolution;
    if (h2 !== undefined) {
      return css`
        @media only screen and (max-width: ${width}px) {
          font-size: ${h2};
        }
      `;
    }
  });
};

export const h3Styles = (resolutions) => {
  return resolutions?.map((resolution) => {
    const { width, h3 } = resolution;
    if (h3 !== undefined) {
      return css`
        @media only screen and (max-width: ${width}px) {
          font-size: ${h3};
        }
      `;
    }
  });
};

export const h4Styles = (resolutions) => {
  return resolutions?.map((resolution) => {
    const { width, h4 } = resolution;
    if (h4 !== undefined) {
      return css`
        @media only screen and (max-width: ${width}px) {
          font-size: ${h4};
        }
      `;
    }
  });
};

export const h5Styles = (resolutions) => {
  return resolutions?.map((resolution) => {
    const { width, h5 } = resolution;
    if (h5 !== undefined) {
      return css`
        @media only screen and (max-width: ${width}px) {
          font-size: ${h5};
        }
      `;
    }
  });
};

export const h6Styles = (resolutions) => {
  return resolutions?.map((resolution) => {
    const { width, h6 } = resolution;
    if (h6 !== undefined) {
      return css`
        @media only screen and (max-width: ${width}px) {
          font-size: ${h6};
        }
      `;
    }
  });
};

export const pStyles = (resolutions) => {
  return resolutions?.map((resolution) => {
    const { width, p } = resolution;
    if (p !== undefined) {
      return css`
        @media only screen and (max-width: ${width}px) {
          font-size: ${p};
        }
      `;
    }
  });
};

export const P = styled.p`
  font-size: ${(props) => props.theme.default?.p};
  ${(props) => pStyles(props.theme.resolutions)};
`;

export const SMALL = styled.small`
  font-size: ${(props) => props.theme.default?.small};
  ${(props) => pStyles(props.theme.resolutions)};
`;

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.default?.h1};
  ${(props) => h1Styles(props.theme.resolutions)};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.default?.h2};
  ${(props) => h2Styles(props.theme.resolutions)};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.default?.h3};
  ${(props) => h3Styles(props.theme.resolutions)};
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.default?.h4};
  ${(props) => h4Styles(props.theme.resolutions)};
`;

export const H5 = styled.h5`
  font-size: ${(props) => props.theme.default?.h5};
  ${(props) => h5Styles(props.theme.resolutions)};
`;

export const H6 = styled.h6`
  font-size: ${(props) => props.theme.default?.h6};
  ${(props) => h6Styles(props.theme.resolutions)};
`;
