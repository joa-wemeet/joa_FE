# joa_FE

# git 쓰는법 (간략하게)
초기설정.
터미널에서 `git clone https://github.com/joa-wemeet/joa_FE.git` 하면 명령을 실행한 경로 아래에 joa_FE라는 폴더가 생길겁니다.
이후 git add, clone, push는 joa_FE에서 해야해요.
ex. `PS C:\Dev\wemeet_fe\joa_FE>` 



# 의존성 관리
(터미널에서 import ~~~ 한거 아래 적어주기.)
import ~~~

# 유지보수 팁
.js 코드에는 js 코드만 넣고 css는 .css 파일에 저장하는게 나중에 gpt 돌리기 수월할겁니다.
js파일에서는 import로 css 파일을 불러와야 사용할 수 있어요

ex.
```
import './index.css';                  #<-이런 식으로.
import React from 'react';
...
```