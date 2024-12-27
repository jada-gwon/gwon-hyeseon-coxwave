# GWON-HYESEON-COXWAVE

Align AI Frontend Engineer 기술 과제 - 권혜선

## 실행 방법

_이 프로젝트는 NodeJS v22.11.0 그리고 pnpm을 필요로 합니다._

1. 먼저 실행에 필요한 의존성을 설치합니다.

   ```bash
   pnpm config set @buf:registry https://buf.build/gen/npm/v1/
   pnpm install --frozen-lockfile
   ```

2. 아래와 같이 개발모드로 실행합니다.

   ```bash
   pnpm dev
   ```

## 전체적인 과제 설계에 대한 설명

전체적인 구조는 [기능 분할 설계(Feature-Sliced Design, FSD)](https://feature-sliced.design/) 아키텍쳐를 적용하여 개발하였습니다.

FSD를 사용하면서도 Next.js의 app route와 충돌을 피하기 위해서 Next.js 페이지 관련 코드들은 `app` 디렉토리에 FSD를 적용한 컴포넌트와 함수들은 `src` 디렉토리에 위치시켰습니다.

### 디렉토리 구조

```text
gwon-hyeseon-coxwave
  ┣ app                             # Next.js app route 코드
  ┣ public                          # 이미지 등의 정적 리소스
  ┗ src
     ┣ app
     ┃  ┣ config
     ┃  ┗ ui
     ┣ widgets
     ┃  ┗ EventListPage             # 프로젝트 선택, 조회기간 필터와 이벤트 목록 테이블을 통합하는 컴포넌트
     ┃    ┣ api
     ┃    ┣ lib
     ┃    ┣ model
     ┃    ┗ ui
     ┣ features
     ┃  ┣ EventTable                # 이벤트 목록을 표시하는 테이블 컴포넌트
     ┃  ┃  ┣ api
     ┃  ┃  ┣ lib
     ┃  ┃  ┣ model
     ┃  ┃  ┗ ui
     ┃  ┣ PeriodFilter              # 이벤트 조회 기간 필터 컴포넌트
     ┃  ┃  ┣ config
     ┃  ┃  ┣ lib
     ┃  ┃  ┣ model
     ┃  ┃  ┗ ui
     ┃  ┗ ProjectSelect             # 이벤트를 조회할 프로젝트를 선택하는 컴포넌트
     ┃     ┣ api
     ┃     ┗ ui
     ┣ entities                     # 독립된 도메인 데이터 요소를 표현하는 레이어
     ┃  ┣ event
     ┃  ┃  ┗ api
     ┃  ┗ project
     ┃     ┗ api
     ┗ shared
        ┣ lib
        ┗ ui                        # 프로젝트 전반에 걸쳐 사용되는 재사용 가능한 UI 컴포넌트
```

## 사용한 라이브러리들과 사용 목적

- `@tanstack/react-query`, `@connectrpc/connect-query"`, `@connectrpc/connect-web`:

  - 서버 데이터 페칭과 캐싱을 효율적으로 처리하고 API error 핸들링, 재시도 등과 같은 기능을 위한 보일러 플레이트 코드를 줄이기 위해 선택했습니다.

- `zustand`:

  - 이벤트 목록의 필터 상태관리를 위해 사용했습니다.
  - zustand가 지향하는 Flux 아키텍쳐(Elm 아키텍쳐)가 상태 변화에 대한 비즈니스로직을 액션 이름으로 추상화 할 수 있다는 점이 코드의 가독성을 높일 수 있어서 사용했습니다.

- `date-fns`, `@date-fns/tz`:

  - 이벤트 조회 기간 필터 기능 구현에 필요한 날짜 연산을 위해 사용했습니다.

- `react-datepicker`

  - 이벤트 조회 기간 필터의 Custom 버튼을 클릭 했을 때 표시되는 데이트피커 구현을 위해 사용했습니다.

- `tailwindcss`

  - 유틸리티 클래스 기반으로 빠르게 스타일링하기 위해 사용했습니다.

- `clsx`
  - 컴포넌트의 상태 등의 조건에 따라 tailwindcss 클래스를 편리하게 적용하기 위해 사용했습니다.

## 특별히 신경 쓴 부분

- [기능 분할 설계(Feature-Sliced Design, FSD)](https://feature-sliced.design/) 아키텍쳐 적용
  - 코드는 기술적인 관점에서 역할 뿐만이 아니라, 도메인, 기능, 데이터의 흐름 등 다양한 관심사를 가집니다. 과제를 수행하며 코드베이스가 더 커지고 기능이나 요구사항이 더 다양해져도 세밀하고 일관성 있는 방식으로 구분할 수 있도록 코드를 잘 나누고 잘 정리하는 방법에 대해 고민했습니다.
  - FSD는 아래 그림과 같이 레이어를 세가지 단계로 구분합니다.
    ![FSD](https://feature-sliced.design/assets/ideal-img/visual_schema.b6c18f6.1030.jpg)
    - 레이어(Layer): 프로젝트 기능적 역할에 따른 수직적 관심사 분리
    - 슬라이스(Slice): 비즈니스 도메인별 관심사 분리
    - 세그먼트(Segment): 기술적 관심사 분리
  - FSD의 적용을 통해 다양한 관점의 관심사를 세밀하게 분리하여 각각의 관심사를 특정하여 분리할 수 있었으며, 코드의 일관성과 탐색의 용이성을 높이는 명확한 컨벤션을 유지할 수 있었습니다.

## 시간이 더 주어진다면 보완하고싶은 부분

- 키보드를 사용하여 Select 컴포넌트를 조작할 수 있도록 지원

  - 현재 Select 컴포넌트는 마우스를 이용해서만 값을 선택 할 수 있습니다. 더 나은 접근성을 위해 키보드의 화살표 키 등을 이용해 값을 선택 할 수 있도록 기능을 확장하고싶습니다.

- E2E테스트 적용
