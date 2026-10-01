/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxdimensions=0;
    let maxarea=0;
    for(let i=0; i<dimensions.length; i++){
        let length=dimensions[i][0];
        let width=dimensions[i][1];
        let now=length*length+width*width
        let area=length*width
        if(now>maxdimensions){maxdimensions=now;maxarea=area}
        else if(now===maxdimensions&&area>maxarea){maxarea=area}
        
    }
    return maxarea;
};