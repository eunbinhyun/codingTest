    function solution(s) {
      let stack = [];
      let answer = 0;

      for (let token of s) { 
        if (!isNaN(token)) stack.push(Number(token));
        else {
          let rt = stack.pop();
          let lt = stack.pop();
          if (token === '+') stack.push(lt + rt);
          else if (token === '-') stack.push(lt - rt);
          else if (token === '*') stack.push(lt * rt);
          else if (token === '/') stack.push(lt / rt);
        }
      }
      return answer;
    }
    console.log(solution('352+*9-'));
