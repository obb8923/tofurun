# React Native 프로젝트 템플릿

이 프로젝트는 React Native 앱 개발을 빠르게 시작할 수 있도록 미리 설정된 템플릿입니다.

## 🚀 시작하는 방법

### 1. 의존성 설치
```bash
npm install
```

### 2. iOS 설정
```bash
cd ios
pod install
cd ..
```

### 3. 앱 실행
```bash
# iOS 실행
npm run ios

# Android 실행
npm run android

# 개발 서버 시작
npm start
```

## 📱 앱 정보 변경하기

### 앱 이름 변경
1. **iOS**: `ios/tmp/Info.plist` 파일에서 `CFBundleDisplayName` 값 수정
2. **Android**: `android/app/src/main/res/values/strings.xml` 파일에서 `app_name` 값 수정
3. **앱 설정**: `app.json` 파일에서 `name` 값 수정

### 패키지명 변경 (Android)
1. **Android 폴더 구조 변경**:
   ```bash
   # 예: com.jeong.tmp → com.yourcompany.yourapp
   cd android/app/src/main/java
   mkdir -p com/yourcompany/yourapp
   mv com/jeong/tmp/* com/yourcompany/yourapp/
   rmdir com/jeong/tmp com/jeong
   ```

2. **파일 내 패키지명 수정**:
   - `android/app/src/main/java/com/yourcompany/yourapp/MainActivity.kt`
   - `android/app/src/main/java/com/yourcompany/yourapp/MainApplication.kt`
   - `android/app/src/main/AndroidManifest.xml`
   - `android/app/build.gradle`

3. **앱 설정**: `app.json` 파일에서 `android.package` 값 수정

### Bundle Identifier 변경 (iOS)
1. **Xcode에서 변경**:
   - Xcode로 `ios/tmp.xcworkspace` 열기
   - 프로젝트 설정에서 Bundle Identifier 수정
2. **또는 `ios/tmp/Info.plist`에서 `CFBundleIdentifier` 수정**

## 🚀 미리 설정된 기능들

### 1. 라우팅 (React Navigation)
- **@react-navigation/native**: 기본 네비게이션 라이브러리
- **@react-navigation/native-stack**: 스택 네비게이션
- **@react-navigation/bottom-tabs**: 하단 탭 네비게이션
- **react-native-screens**: 네이티브 스크린 최적화
- **react-native-safe-area-context**: 안전 영역 처리

### 2. 폰트 (Pretendard)
- **Pretendard-Regular**: 기본 폰트
- **Pretendard-SemiBold**: 세미볼드
- **Pretendard-ExtraBold**: 엑스트라 볼드
- **Pretendard-Black**: 블랙

**사용법:**
```tsx
<Text className="font-p">기본 폰트</Text>
<Text className="font-p-semibold">세미볼드</Text>
<Text className="font-p-extrabold">엑스트라 볼드</Text>
<Text className="font-p-black">블랙</Text>
```

### 3. SVG 지원
- **react-native-svg**: SVG 렌더링
- **react-native-svg-transformer**: SVG를 React 컴포넌트로 변환

**사용법:**
```tsx
import Right from './assets/svgs/ChevronRight.svg';

<Right width={48} height={48} color="white" />
```

### 4. 스타일링 (Tailwind CSS + NativeWind)
- **NativeWind**: React Native용 Tailwind CSS
- 미리 정의된 색상 팔레트:
  - `bg-background`: #fafafa
  - `bg-white`: #fefefe
  - `text-black`: #191919

**사용법:**
```tsx
<View className="flex-1 bg-green-500 justify-center items-center">
  <Text className="text-white text-xl mt-4">Tailwind 스타일링</Text>
</View>
```

## 📁 프로젝트 구조

```
src/
├── domain/           # 도메인별 컴포넌트
│   └── Home/        # 홈 화면
└── shared/          # 공통 컴포넌트

assets/
├── fonts/           # 폰트 파일들
└── svgs/            # SVG 아이콘들
```

## 📱 현재 설정된 화면

### 홈 화면 (`src/domain/Home/index.tsx`)
- 모든 설정이 제대로 작동하는지 확인할 수 있는 데모 화면
- Pretendard 폰트의 다양한 굵기 표시
- SVG 아이콘 렌더링
- Tailwind CSS 스타일링 예시

## 🔧 주요 설정 파일들

- **`metro.config.js`**: SVG 변환기 및 NativeWind 설정
- **`tailwind.config.js`**: Tailwind CSS 설정 및 커스텀 폰트 정의
- **`react-native.config.js`**: 폰트 자산 설정
- **`declaration.d.ts`**: TypeScript SVG 타입 정의

